import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, TrendingUp, PiggyBank, IndianRupee } from "lucide-react";
export const Route = createFileRoute("/user/investments")({
  component: UserInvestmentsPage,
});

function UserInvestmentsPage() {
  const investments = [
    {
      name: "SIP Investment",
      amount: "₹5,000 / month",
      returns: "+12.5%",
      status: "Active",
      icon: TrendingUp,
    },
    {
      name: "Mutual Fund",
      amount: "₹1,20,000",
      returns: "+18.2%",
      status: "Active",
      icon: LineChart,
    },
    {
      name: "Tax Saving ELSS",
      amount: "₹50,000",
      returns: "+10.8%",
      status: "Locked-in",
      icon: PiggyBank,
    },
  ];

  return (
    <DashboardLayout type="user">
      <h1 className="text-4xl font-bold text-[#07142f]">
        My Investments
      </h1>

      <p className="mt-2 text-muted-foreground">
        Track SIPs, mutual funds, returns, and investment performance.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {investments.map(({ name, amount, returns, status, icon: Icon }) => (
          <Card
            key={name}
            className="rounded-3xl border border-gray-100 p-6 shadow-soft"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white">
              <Icon className="h-7 w-7" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-[#17357e]">
              {name}
            </h2>

            <div className="mt-5 space-y-3 text-sm">
              <p>
                <b>Investment:</b> {amount}
              </p>

              <p>
                <b>Returns:</b>{" "}
                <span className="font-semibold text-green-600">
                  {returns}
                </span>
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
          <IndianRupee className="h-8 w-8 text-[#17357e]" />

          <div>
            <h2 className="text-2xl font-bold text-[#17357e]">
              Investment Summary
            </h2>

            <p className="text-sm text-muted-foreground">
              Total portfolio value, monthly SIPs, and estimated returns.
            </p>
          </div>
        </div>
      </Card>
    </DashboardLayout>
  );
}
