import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/user/kyc")({
  component: UserKYCPage,
});

function UserKYCPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#17357e]">
          KYC Verification
        </h1>

        <p className="text-muted-foreground">
          Complete your KYC to access all financial services.
        </p>
      </div>

      <Card className="p-6 rounded-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              KYC Status
            </h2>

            <p className="mt-2 text-red-500 font-medium">
              Pending Verification
            </p>
          </div>

          <Button className="bg-gradient-to-r from-[#17357e] to-blue-600">
            Upload Documents
          </Button>
        </div>
      </Card>

      <Card className="p-6 rounded-3xl">
        <h2 className="text-xl font-semibold mb-4">
          Required Documents
        </h2>

        <ul className="space-y-3">
          <li>✅ Aadhaar Card</li>
          <li>✅ PAN Card</li>
          <li>✅ Passport Size Photo</li>
          <li>✅ Address Proof</li>
        </ul>
      </Card>

      <Card className="p-6 rounded-3xl">
        <h2 className="text-xl font-semibold mb-4">
          Uploaded Documents
        </h2>

        <p className="text-muted-foreground">
          No documents uploaded yet.
        </p>
      </Card>
    </div>
  );
}
