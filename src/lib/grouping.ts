import { Expense } from "./expenses";

type Period = "daily" | "weekly" | "monthly";

export function groupExpensesByPeriod(expenses: Expense[] = [], period: Period) {
  const grouped: Record<string, number> = {};

  expenses.forEach((exp) => {
    const date = new Date(exp.date);
    let key: string;

    switch (period) {
      case "daily":
        key = date.toISOString().split("T")[0];
        break;
      case "weekly":
        const start = new Date(date);
        start.setDate(date.getDate() - date.getDay()); // Sunday of the week
        key = start.toISOString().split("T")[0];
        break;
      case "monthly":
        key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
        break;
    }

    grouped[key] = (grouped[key] || 0) + exp.amount;
  });

  return Object.entries(grouped).map(([date, amount]) => ({
    date,
    amount,
  }));
}