import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Landmark, Home, Briefcase, Car } from "lucide-react";

export const Route = createFileRoute("/user/loans")({
  component: UserLoansPage,
});

function UserLoansPage() {
  const loans = [
    {
      type: "Home Loan",
      amount: "₹25,00,000",
      emi: "₹22,500",
      status: "Approved",
      icon: Home,
    },
    {
      type: "Business Loan",
      amount: "₹10,00,000",
      emi: "₹18,000",
      status: "Under Review",
      icon: Briefcase,
    },
    {
      type: "Vehicle Loan",
      amount: "₹6,50,000",
      emi: "₹12,300",
      status: "Pending",
      icon: Car,
    },
  ];

  return (
    <DashboardLayout type="user">
      <h1 className="text-4xl font-bold text-[#07142f]">
        My Loans
      </h1>

      <p className="mt-2 text-muted-foreground">
        View your active loan applications, EMI details, and approval status.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {loans.map(({ type, amount, emi, status, icon: Icon }) => (
          <Card
            key={type}
            className="rounded-3xl border border-gray-100 p-6 shadow-soft"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
              <Icon className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#17357e]">
              {type}
            </h2>

            <div className="mt-5 space-y-3 text-sm">
              <p>
                <b>Loan Amount:</b> {amount}
              </p>

              <p>
                <b>Monthly EMI:</b> {emi}
              </p>

              <p>
                <b>Status:</b>{" "}
                <Badge variant="secondary">{status}</Badge>
              </p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="mt-8 rounded-3xl p-6 shadow-soft">
        <div className="flex items-center gap-3">
          <Landmark className="h-8 w-8 text-[#17357e]" />

          <div>
            <h2 className="text-2xl font-bold text-[#17357e]">
              Loan Summary
            </h2>

            <p className="text-sm text-muted-foreground">
              Track your total loan amount, EMI payments, and approval progress.
            </p>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}
