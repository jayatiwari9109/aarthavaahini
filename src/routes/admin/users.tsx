import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/admin/users")({
  component: UsersPage,
});

function UsersPage() {
  const users = [
    { name: "Rahul Sharma", email: "rahul@gmail.com", role: "User", status: "Active" },
    { name: "Priya Verma", email: "priya@gmail.com", role: "User", status: "Active" },
    { name: "Admin User", email: "admin@gmail.com", role: "Admin", status: "Active" },
  ];

  return (
    <DashboardLayout type="admin">
      <h1 className="text-4xl font-bold text-[#07142f]">Users</h1>
      <p className="mt-2 text-muted-foreground">Manage all registered users.</p>

      <Card className="mt-8 overflow-x-auto rounded-3xl p-0 shadow-soft">
        <table className="w-full text-sm">
          <thead className="bg-secondary/60 text-left text-xs uppercase text-muted-foreground">
            <tr>
              <th className="px-5 py-4">Name</th>
              <th className="px-5 py-4">Email</th>
              <th className="px-5 py-4">Role</th>
              <th className="px-5 py-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.email} className="border-t">
                <td className="px-5 py-4 font-semibold">{user.name}</td>
                <td className="px-5 py-4 text-muted-foreground">{user.email}</td>
                <td className="px-5 py-4">
                  <Badge variant="secondary">{user.role}</Badge>
                </td>
                <td className="px-5 py-4 text-green-600 font-medium">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </DashboardLayout>
  );
}
