import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/card";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import {
  Users,
  IndianRupee,
  Landmark,
  CreditCard,
  FileText,
} from "lucide-react";

export const Route = createFileRoute("/admin-dashboard")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "1,245",
      icon: Users,
    },
    {
      title: "Total Revenue",
      value: "₹12.5L",
      icon: IndianRupee,
    },
    {
      title: "Loan Applications",
      value: "324",
      icon: Landmark,
    },
    {
      title: "Transactions",
      value: "890",
      icon: CreditCard,
    },
  ];

  const applications = [
    {
      name: "Rahul Sharma",
      product: "Home Loan",
      amount: "₹25,00,000",
      status: "Pending",
    },
    {
      name: "Priya Verma",
      product: "Health Insurance",
      amount: "₹10,00,000",
      status: "Approved",
    },
    {
      name: "Amit Jain",
      product: "Business Loan",
      amount: "₹15,00,000",
      status: "Review",
    },
  ];

  return (
    <DashboardLayout type="admin">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-[#07142f]">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground">
          Manage users, revenue, loan applications, transactions, and reports.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>
{/* 
      <div className="mt-8 grid gap-6 xl:grid-cols-[1.5fr_1fr]"> */}
      <div className="mt-8 space-y-6">

  {/* REVENUE CHART */}

  <Card className="p-6 rounded-3xl shadow-soft">

    <h2 className="text-2xl font-bold text-[#17357e]">
      Revenue Analytics
    </h2>

    <div className="mt-6">
      <RevenueChart />
    </div>

  </Card>

  {/* RECENT APPLICATIONS */}

  <Card className="rounded-3xl p-6 shadow-soft">

    <h2 className="text-2xl font-bold text-[#17357e]">
      Recent Applications
    </h2>

    {/* Table Here */}

  </Card>

</div>
        <Card className="rounded-3xl p-6 shadow-soft">
          <h2 className="text-2xl font-bold text-[#17357e]">
            Recent Applications
          </h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-muted-foreground">
                <tr>
                  <th className="py-3">Customer</th>
                  <th>Product</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {applications.map((app) => (
                  <tr key={app.name} className="border-t">
                    <td className="py-4 font-medium">{app.name}</td>
                    <td>{app.product}</td>
                    <td>{app.amount}</td>
                    <td>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="rounded-3xl p-6 shadow-soft">
          <FileText className="h-10 w-10 text-[#17357e]" />

          <h2 className="mt-5 text-2xl font-bold text-[#17357e]">
            Reports
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Generate user reports, loan reports, transaction reports, and monthly revenue summaries.
          </p>

          <button className="mt-6 rounded-xl bg-gradient-to-r from-[#17357e] to-blue-600 px-5 py-3 text-sm font-semibold text-white">
            Generate Report
          </button>
        </Card>
      </div>
    </DashboardLayout>
  );
}
