'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


type ExpenseFormProps = {
  onSubmit: (expense: ExpenseInput) => void;
};

export type ExpenseInput = {
  title: string;
  amount: number;
  category: string;
  date: string;
};

export default function ExpenseForm({ onSubmit }: ExpenseFormProps) {
  const [form, setForm] = useState<ExpenseInput>({
    title: '',
    amount: 0,
    category: '',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'amount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.category || !form.date) return;
    onSubmit(form);
    setForm({ title: '', amount: 0, category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-xl shadow-sm max-w-md mx-auto">
      <div>
        <Label htmlFor="title">Title</Label>
        <Input id="title" name="title" value={form.title} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          id="amount"
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Input id="category" name="category" value={form.category} onChange={handleChange} required />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full">Add Expense</Button>
    </form>
  );
}