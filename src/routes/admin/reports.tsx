import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  Users,
  Landmark,
  CreditCard,
  IndianRupee,
} from "lucide-react";

export const Route = createFileRoute("/admin/reports")({
  component: ReportsPage,
});

function ReportsPage() {
  const reports = [
    {
      title: "User Report",
      desc: "Export registered user details.",
      icon: Users,
    },
    {
      title: "Loan Report",
      desc: "Export loan applications and approval status.",
      icon: Landmark,
    },
    {
      title: "Transaction Report",
      desc: "Export payment and transaction records.",
      icon: CreditCard,
    },
    {
      title: "Revenue Report",
      desc: "Export monthly revenue and business summary.",
      icon: IndianRupee,
    },
  ];

  return (
    <DashboardLayout type="admin">
      <h1 className="text-4xl font-bold text-[#07142f]">Reports</h1>
      <p className="mt-2 text-muted-foreground">Generate and export business reports.</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reports.map(({ title, desc, icon: Icon }) => (
          <Card key={title} className="rounded-3xl p-6 shadow-soft">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
              <Icon className="h-7 w-7" />
            </div>

            <h2 className="mt-6 text-xl font-bold text-[#17357e]">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{desc}</p>

            <Button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 text-white">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </Card>
        ))}
      </div>

      <Card className="mt-8 rounded-3xl p-6 shadow-soft">
        <FileText className="h-10 w-10 text-[#17357e]" />

        <h2 className="mt-5 text-2xl font-bold text-[#17357e]">
          Monthly Business Summary
        </h2>

        <p className="mt-3 text-muted-foreground">
          View monthly performance across users, leads, loan applications, revenue and transactions.
        </p>
      </Card>
    </DashboardLayout>
  );
}
