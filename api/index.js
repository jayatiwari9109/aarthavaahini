import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync, existsSync } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Cache the server entry
let cachedServerEntry = null;

async function getServerEntry() {
  if (cachedServerEntry) {
    return cachedServerEntry;
  }

  try {
    // Import the Cloudflare Workers entry
    const module = await import(join(__dirname, "../dist/server/index.js"));
    cachedServerEntry = module.default;
    return cachedServerEntry;
  } catch (error) {
    console.error("Failed to load server entry:", error);
    throw error;
  }
}

// Helper function to get content type
function getContentType(pathname) {
  const ext = pathname.split(".").pop();
  const types = {
    js: "application/javascript; charset=utf-8",
    mjs: "application/javascript; charset=utf-8",
    css: "text/css; charset=utf-8",
    html: "text/html; charset=utf-8",
    json: "application/json",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    svg: "image/svg+xml",
    woff: "font/woff",
    woff2: "font/woff2",
    ttf: "font/ttf",
    eot: "application/vnd.ms-fontobject",
  };
  return types[ext] || "application/octet-stream";
}

export default async function handler(req, res) {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const pathname = url.pathname;

    // Try to serve static files from dist/client first
    if (pathname !== "/" && pathname !== "/api" && !pathname.startsWith("/api/")) {
      const clientPath = join(__dirname, "../dist/client", pathname);
      if (existsSync(clientPath)) {
        try {
          const content = readFileSync(clientPath);
          res.setHeader("Content-Type", getContentType(pathname));
          
          // Cache static assets for a year
          if (pathname.includes("/assets/")) {
            res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          } else {
            res.setHeader("Cache-Control", "public, max-age=3600");
          }
          
          return res.send(content);
        } catch (error) {
          console.error("Error reading static file:", error);
          // Fall through to SSR
        }
      }
    }

    // Get the server entry (Cloudflare Workers format)
    const serverEntry = await getServerEntry();

    // Convert Node.js request to Fetch API Request
    const requestUrl = new URL(req.url || "/", `http://${req.headers.host}`);
    
    // Prepare request body
    let body = undefined;
    if (req.method !== "GET" && req.method !== "HEAD") {
      if (typeof req.body === "string") {
        body = req.body;
      } else if (Buffer.isBuffer(req.body)) {
        body = req.body;
      } else if (req.body) {
        body = JSON.stringify(req.body);
      }
    }

    // Create Fetch API compatible headers
    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value !== undefined) {
        headers.append(key, String(value));
      }
    }

    // Create Fetch API Request
    const fetchRequest = new Request(requestUrl, {
      method: req.method || "GET",
      headers: headers,
      body: body,
    });

    // Call the Cloudflare Workers entry point
    const response = await serverEntry.fetch(fetchRequest);

    // Convert Fetch API Response to Node.js response
    const buffer = await response.arrayBuffer();
    
    // Set status
    res.status(response.status);

    // Copy response headers
    response.headers.forEach((value, key) => {
      // Skip problematic headers
      if (!["transfer-encoding", "content-encoding"].includes(key.toLowerCase())) {
        res.setHeader(key, value);
      }
    });

    // Send the response body
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("Server error:", error);
    
    // Return error response
    const errorBody = JSON.stringify({
      error: "Internal Server Error",
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });

    res.status(500);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send(errorBody);
  }
}
