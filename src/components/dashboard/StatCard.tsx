import { Card } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: string;
};

export function StatCard({
  title,
  value,
  icon: Icon,
  color = "from-[#17357e] to-blue-600",
}: Props) {
  return (
    <Card className="rounded-3xl border border-gray-100 p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-[#17357e]">
            {value}
          </h3>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${color} text-white`}
        >
          <Icon className="h-7 w-7" />
        </div>
      </div>
    </Card>
  );
}