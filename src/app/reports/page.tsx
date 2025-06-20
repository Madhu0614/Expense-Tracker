// src/app/reports/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/lib/expenses";
import AdvancedChartTabs from "@/components/ExpenseChart"; // Make sure this file exists
import { groupExpensesByPeriod } from "@/lib/grouping";

export default function ReportsPage() {
  const { data: expenses, isLoading } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  const dailyData = groupExpensesByPeriod(expenses || [], "daily");
  const weeklyData = groupExpensesByPeriod(expenses || [], "weekly");
  const monthlyData = groupExpensesByPeriod(expenses || [], "monthly");

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Reports</h1>

      {isLoading ? (
        <p className="text-muted-foreground">Loading reports...</p>
      ) : (
      <AdvancedChartTabs
          dailyData={groupExpensesByPeriod(expenses, "daily")}
          weeklyData={groupExpensesByPeriod(expenses, "weekly")}
          monthlyData={groupExpensesByPeriod(expenses, "monthly")}
        />

      )}
    </div>
  );
}
