'use client';

import { useQuery } from "@tanstack/react-query";
import { getExpenses, Expense } from "@/lib/expenses";
import { Card, CardContent } from "@/components/ui/card";

export default function SubscriptionsPage() {
  const { data, isLoading } = useQuery<Expense[]>({
    queryKey: ["subscriptions"],
    queryFn: getExpenses,
  });

  const subscriptions = (data || []).filter(
    (e) => ["Subscription", "Software", "Hosting"].includes(e.category)
  );

  // Group by employee
  const groupedByEmployee = subscriptions.reduce<Record<string, Expense[]>>((acc, expense) => {
    if (!acc[expense.employee]) {
      acc[expense.employee] = [];
    }
    acc[expense.employee].push(expense);
    return acc;
  }, {});

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold">Employee Subscriptions</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        Object.entries(groupedByEmployee).map(([employee, expenses]) => {
          const total = expenses.reduce((sum, e) => sum + e.amount, 0);

          return (
            <div key={employee} className="space-y-3">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{employee}</h2>
                <p className="text-green-700 font-bold">
                  ₹ {total.toLocaleString()} total
                </p>
              </div>

              {expenses.map((sub) => (
                <Card key={sub.id}>
                  <CardContent className="p-4 space-y-1">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">{sub.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {sub.category} • {sub.frequency} • {sub.date}
                        </p>
                      </div>
                      <p className="text-right font-semibold text-green-600">
                        ₹ {sub.amount.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          );
        })
      )}
    </div>
  );
}
