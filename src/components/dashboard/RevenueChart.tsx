import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 100000 },
  { month: "Feb", revenue: 150000 },
  { month: "Mar", revenue: 200000 },
  { month: "Apr", revenue: 250000 },
];

export function RevenueChart() {
  return (
    <div className="h-[350px] w-full">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#17357e"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}