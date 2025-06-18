"use client";

import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/expenses";

export default function Home() {
  const { data, isLoading } = useQuery({ queryKey: ["expenses"], queryFn: getExpenses });

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>

      {isLoading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        data?.map((exp) => (
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
            <p className="font-semibold">₹{exp.amount}</p>
          </div>
        ))
      )}
    </div>
  );
}
