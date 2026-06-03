import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/card";

import {
  User,
  LineChart,
  Landmark,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/user-dashboard")({
  component: UserDashboard,
});

function UserDashboard() {
  const stats = [
    {
      title: "Investments",
      value: "₹2.4L",
      icon: LineChart,
    },
    {
      title: "Active Loans",
      value: "2",
      icon: Landmark,
    },
    {
      title: "Transactions",
      value: "48",
      icon: CreditCard,
    },
    {
      title: "KYC Status",
      value: "Verified",
      icon: ShieldCheck,
    },
  ];

  return (
    <DashboardLayout type="user">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-[#07142f]">
          User Dashboard
        </h1>

        <p className="text-muted-foreground">
          View your profile, investments, loans, transactions, and KYC status.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        <Card className="rounded-3xl p-6 shadow-soft">
          <User className="h-10 w-10 text-[#17357e]" />

          <h2 className="mt-5 text-2xl font-bold text-[#17357e]">
            Profile
          </h2>

          <div className="mt-5 space-y-3 text-sm">
            <p><b>Name:</b> Jaya Tiwari</p>
            <p><b>Email:</b> user@example.com</p>
            <p><b>Mobile:</b> +91 98XXXXXXXX</p>
            <p><b>KYC:</b> Verified</p>
          </div>
        </Card>

        <Card className="rounded-3xl p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-[#17357e]">
            Recent Transactions
          </h2>

          <div className="mt-6 space-y-4">
            {[
              ["SIP Investment", "₹5,000", "Success"],
              ["Loan EMI", "₹12,500", "Paid"],
              ["Insurance Premium", "₹2,100", "Success"],
            ].map(([name, amount, status]) => (
              <div
                key={name}
                className="flex items-center justify-between rounded-2xl bg-gray-50 p-4"
              >
                <div>
                  <p className="font-medium">{name}</p>
                  <p className="text-xs text-muted-foreground">{status}</p>
                </div>

                <p className="font-bold text-[#17357e]">
                  {amount}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
