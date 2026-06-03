import { UserInvestmentsPage } from "@/routes/user/investments";
import { createFileRoute, Link } from "@tanstack/react-router";

import {
  LayoutDashboard,
  Users,
  FileText,
  CreditCard,
  Landmark,
  ShieldCheck,
  LineChart,
  Settings,
  LogOut,
} from "lucide-react";

type Props = {
  children: React.ReactNode;
  type: "admin" | "user";
};

export function DashboardLayout({ children, type }: Props) {
  const adminLinks = [
    { name: "Dashboard", icon: LayoutDashboard, link: "/admin-dashboard" },
    { name: "Users", icon: Users, link: "#" },
    { name: "Loan Applications", icon: Landmark, link: "#" },
    { name: "Transactions", icon: CreditCard, link: "#" },
    { name: "Reports", icon: FileText, link: "#" },
    { name: "Settings", icon: Settings, link: "#" },
  ];

  const userLinks = [
    { name: "Dashboard", icon: LayoutDashboard, link: "/user-dashboard" },
   { name: "Profile", icon: Users, link: "/user/profile" },
{ name: "Investments", icon: LineChart, link: "/user/investments" },
{ name: "Loans", icon: Landmark, link: "/user/loans" },
{ name: "Transactions", icon: CreditCard, link: "/user/transactions" },
{ name: "KYC Status", icon: ShieldCheck, link: "/user/kyc" },
  ];

  const links = type === "admin" ? adminLinks : userLinks;

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className="fixed left-0 top-0 hidden h-screen w-72 bg-[#07142f] p-6 text-white lg:block">
          <h2 className="text-2xl font-bold">
            Aarthvaahini
          </h2>

          <p className="mt-1 text-sm text-white/60">
            {type === "admin" ? "Admin Panel" : "User Panel"}
          </p>

          <nav className="mt-10 space-y-2">
            {links.map(({ name, icon: Icon, link }) => (
              <Link
                key={name}
                to={link}
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                <Icon className="h-5 w-5" />
                {name}
              </Link>
            ))}
          </nav>

          <button className="absolute bottom-6 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/10">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </aside>

        {/* MAIN */}
        <main className="min-h-screen flex-1 p-5 lg:ml-72 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
export const Route = createFileRoute("/user/investments")({
  component: UserInvestmentsPage,
});
