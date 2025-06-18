// src/app/reports/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/lib/expenses";
import ExpenseChart from "@/components/ExpenseChart";
import { groupExpensesByPeriod } from "@/lib/grouping";

export default function ReportsPage() {
  const { data: expenses, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  const dailyData = groupExpensesByPeriod(expenses, "daily");
  const weeklyData = groupExpensesByPeriod(expenses, "weekly");
  const monthlyData = groupExpensesByPeriod(expenses, "monthly");

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Reports</h1>

      {isLoading ? (
        <p className="text-muted-foreground">Loading reports...</p>
      ) : (
        <>
          <div>
            <h2 className="text-xl font-semibold mb-2">Daily Expenses</h2>
            <ExpenseChart data={dailyData} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Weekly Expenses</h2>
            <ExpenseChart data={weeklyData} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Monthly Expenses</h2>
            <ExpenseChart data={monthlyData} />
          </div>
        </>
      )}
    </div>
  );
}
