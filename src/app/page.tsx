"use client";

import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/expenses";
import ExpenseList from "../components/ExpenseList";
import { Expense } from "../lib/expenses";


export default function Home() {
  const { data, isLoading } = useQuery({ queryKey: ["expenses"], queryFn: getExpenses });

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Expense Tracker</h1>

      {isLoading ? (
        <p className="text-muted-foreground">Loading...</p>
      ) : (
        <ExpenseList expenses={data as Expense[]} />
      )}
    </div>
  );
}
