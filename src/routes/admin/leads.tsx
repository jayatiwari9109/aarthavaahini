import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/leads")({
  component: LeadsPage,
});

function LeadsPage() {
  const leads = [
    {
      name: "Jaya Tiwari",
      phone: "9876543210",
      product: "Home Loan",
      amount: "₹25,00,000",
      status: "New",
    },
    {
      name: "Amit Jain",
      phone: "9988776655",
      product: "Business Loan",
      amount: "₹15,00,000",
      status: "Review",
    },
    {
      name: "Priya Verma",
      phone: "9123456789",
      product: "Health Insurance",
      amount: "₹10,00,000",
      status: "Approved",
    },
  ];

  return (
    <DashboardLayout type="admin">
      <h1 className="text-4xl font-bold text-[#07142f]">Leads</h1>
      <p className="mt-2 text-muted-foreground">Track customer enquiries and applications.</p>

      <Card className="mt-8 overflow-x-auto rounded-3xl p-0 shadow-soft">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Phone</th>
              <th className="px-5 py-4">Product</th>
              <th className="px-5 py-4">Amount</th>
              <th className="px-5 py-4">Status</th>
              <th className="px-5 py-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {leads.map((lead) => (
              <tr key={lead.phone} className="border-t">
                <td className="px-5 py-4 font-semibold">{lead.name}</td>
                <td className="px-5 py-4">{lead.phone}</td>
                <td className="px-5 py-4">{lead.product}</td>
                <td className="px-5 py-4">{lead.amount}</td>
                <td className="px-5 py-4">
                  <Badge variant="secondary">{lead.status}</Badge>
                </td>
                <td className="px-5 py-4">
                  <Button size="sm" variant="outline">View</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </DashboardLayout>
  );
}
