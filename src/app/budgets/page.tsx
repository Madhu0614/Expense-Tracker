'use client';

import { useEffect, useState } from "react";
import { getExpenses, Expense } from "@/lib/expenses";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type Category = "Software" | "Subscription" | "Health" | "Entertainment";

type GroupedData = {
  category: Category;
  total: number;
};

const categories: Category[] = ["Software", "Subscription", "Health", "Entertainment"];

export default function ReportsPage() {
  const [grouped, setGrouped] = useState<GroupedData[]>([]);

  useEffect(() => {
    async function loadAndGroup() {
      const expenses = await getExpenses();

      const groupedData: GroupedData[] = categories.map((cat) => {
        const total = expenses
          .filter((e) => e.category.toLowerCase() === cat.toLowerCase())
          .reduce((sum, e) => sum + e.amount, 0);

        return { category: cat, total };
      });

      setGrouped(groupedData);
    }

    loadAndGroup();
  }, []);

  const totalAll = grouped.reduce((sum, g) => sum + g.total, 0);

  return (
    <div className="p-6 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Spending Report</h1>

      {grouped.map((g) => {
        const percent = totalAll === 0 ? 0 : Math.round((g.total / totalAll) * 100);

        return (
          <Card key={g.category}>
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{g.category}</span>
                <span className="text-sm text-muted-foreground">
                  ₹{g.total.toLocaleString()} ({percent}%)
                </span>
              </div>
              <Progress value={percent} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
