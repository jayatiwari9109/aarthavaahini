import { createFileRoute } from "@tanstack/react-router";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/user/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  return (
    <DashboardLayout type="user">
      <h1 className="text-4xl font-bold">
        My Profile
      </h1>

      <Card className="mt-6 p-6">
        <p><b>Name:</b> Jaya Tiwari</p>
        <p><b>Email:</b> jaya@gmail.com</p>
        <p><b>Phone:</b> 9876543210</p>
      </Card>
    </DashboardLayout>
  );
}
