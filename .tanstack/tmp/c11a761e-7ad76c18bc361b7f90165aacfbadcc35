import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  IndianRupee,
  ArrowUpRight,
  ArrowDownLeft,
  Receipt,
} from "lucide-react";

export const Route = createFileRoute("/user/transactions")({
    component: UserTransactionsPage,});

function UserTransactionsPage() {
  const transactions = [
    {
      title: "SIP Investment",
      type: "Debit",
      amount: "₹5,000",
      date: "12 June 2026",
      status: "Success",
      icon: ArrowUpRight,
    },
    {
      title: "Loan EMI Payment",
      type: "Debit",
      amount: "₹22,500",
      date: "10 June 2026",
      status: "Paid",
      icon: Receipt,
    },
    {
      title: "Insurance Premium",
      type: "Debit",
      amount: "₹2,100",
      date: "08 June 2026",
      status: "Success",
      icon: CreditCard,
    },
    {
      title: "Cashback Received",
      type: "Credit",
      amount: "₹750",
      date: "05 June 2026",
      status: "Received",
      icon: ArrowDownLeft,
    },
  ];

  return (
    <DashboardLayout type="user">
      <h1 className="text-4xl font-bold text-[#07142f]">
        Transactions
      </h1>

      <p className="mt-2 text-muted-foreground">
        View all your EMI payments, SIP investments, insurance premiums, and credits.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="rounded-3xl p-6 shadow-soft">
          <IndianRupee className="h-9 w-9 text-[#17357e]" />
          <h2 className="mt-4 text-2xl font-bold text-[#17357e]">
            ₹29,600
          </h2>
          <p className="text-sm text-muted-foreground">
            Total Paid This Month
          </p>
        </Card>

        <Card className="rounded-3xl p-6 shadow-soft">
          <CreditCard className="h-9 w-9 text-green-600" />
          <h2 className="mt-4 text-2xl font-bold text-[#17357e]">
            4
          </h2>
          <p className="text-sm text-muted-foreground">
            Total Transactions
          </p>
        </Card>

        <Card className="rounded-3xl p-6 shadow-soft">
          <ArrowDownLeft className="h-9 w-9 text-blue-600" />
          <h2 className="mt-4 text-2xl font-bold text-[#17357e]">
            ₹750
          </h2>
          <p className="text-sm text-muted-foreground">
            Cashback / Credits
          </p>
        </Card>
      </div>

      <Card className="mt-8 overflow-x-auto rounded-3xl p-0 shadow-soft">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-5 py-4">Transaction</th>
              <th className="px-5 py-4">Type</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Date</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(({ title, type, amount, date, status, icon: Icon }) => (
              <tr key={title} className="border-t">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#17357e]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <span className="font-semibold">{title}</span>
                  </div>
                </td>

                <td className="px-5 py-4">{type}</td>

                <td
                  className={`px-5 py-4 font-bold ${
                    type === "Credit" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {type === "Credit" ? "+" : "-"} {amount}
                </td>

                <td className="px-5 py-4 text-muted-foreground">
                  {date}
                </td>

                <td className="px-5 py-4">
                  <Badge variant="secondary">{status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </DashboardLayout>
  );
}
