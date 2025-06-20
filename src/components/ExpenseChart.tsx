"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { Download } from "lucide-react";

type ChartData = {
  date: string;
  amount: number;
}[];

type Props = {
  dailyData: ChartData;
  weeklyData: ChartData;
  monthlyData: ChartData;
};

const tabColors: Record<string, string> = {
  Daily: "#3b82f6",
  Weekly: "#10b981",
  Monthly: "#f59e0b",
};

export default function AdvancedChartTabs({ dailyData, weeklyData, monthlyData }: Props) {
  const periods = ["Daily", "Weekly", "Monthly"];
  const chartMap: Record<string, ChartData> = {
    Daily: dailyData,
    Weekly: weeklyData,
    Monthly: monthlyData,
  };

  const downloadCSV = (data: ChartData, period: string) => {
    const csvRows = [["Date", "Amount"], ...data.map((d) => [d.date, d.amount])];
    const csvContent = csvRows.map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${period.toLowerCase()}-expenses.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tab.Group>
        <Tab.List className="flex space-x-2 border-b mb-4 overflow-x-auto">
          {periods.map((period) => (
            <Tab
              key={period}
              className={({ selected }) =>
                clsx(
                  "px-4 py-2 text-sm font-semibold transition rounded-t-md duration-300",
                  selected
                    ? " text-black shadow border-b-black dark:border-b-black bg-white dark:bg-zinc-900  "
                    : "bg-zinc-100 dark:bg-zinc-800 text-gray-500 hover:text-black dark:hover:text-white"
                )
              }
            >
              {period}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="rounded-xl border shadow-sm p-4 bg-white dark:bg-zinc-900 min-h-[300px]">
          {periods.map((period) => {
            const data = chartMap[period];
            const total = data.reduce((sum, d) => sum + d.amount, 0);

            return (
              <Tab.Panel key={period}>
                {data.length === 0 ? (
                  <p className="text-sm text-muted-foreground">No data available.</p>
                ) : (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                        Total: ₹{total.toLocaleString()}
                      </span>
                      <button
                        onClick={() => downloadCSV(data, period)}
                        className="flex items-center text-xs text-blue-600 hover:underline"
                      >
                        <Download className="w-4 h-4 mr-1" />
                        Export CSV
                      </button>
                    </div>

                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={data}>
                        <defs>
                          <linearGradient id={`color-${period}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={tabColors[period]} stopOpacity={0.8} />
                            <stop offset="95%" stopColor={tabColors[period]} stopOpacity={0.3} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#ffffff",
                            border: "1px solid #d1d5db",
                            fontSize: "0.8rem",
                          }}
                          labelStyle={{ fontWeight: 600 }}
                          formatter={(value: number) => [`₹${value}`, "Amount"]}
                          labelFormatter={(label) => `🗓 ${label}`}
                        />
                          <Bar
                            dataKey="amount"
                            fill={`url(#color-${period})`}
                            radius={[4, 4, 0, 0]}
                            barSize={24}
                            animationDuration={600}
                          />
                      </BarChart>
                    </ResponsiveContainer>
                  </>
                )}
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
