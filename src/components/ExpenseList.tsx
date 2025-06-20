"use client";
import { Expense } from "@/lib/expenses";

export default function ExpenseList({ expenses }: { expenses: Expense[] }) {
  return (
    <div className="space-y-4">
      {expenses.map((exp) => (
        <div
          key={exp.id}
          className="p-4 rounded-xl border shadow-sm flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{exp.title}</p>
            <p className="text-sm text-muted-foreground">
              {exp.category} • {exp.date}
            </p>
          </div>
          <p className="font-semibold  text-green-700">₹{exp.amount}</p>
        </div>
      ))}
    </div>
  );
} 
