
export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: "Subscription" | "Software" | "Hosting" | "Other";
  frequency: "Monthly" | "Yearly" | "One-time";
  date: string;
  employee: string; 
};

export const getExpenses = async (): Promise<Expense[]> => {
  return [
    {
      id: 1,
      title: "Outlook 365 Family (Johnsonb2b)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-07",
      employee: "Mary Linda (hema)",
    },
    {
      id: 2,
      title: "Outlook 365 Family (Freshdata)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-07-05",
      employee: "Olivia Smith (Deepika)",
    },
    {
      id: 3,
      title: "Notion",
      amount: 490,
      category: "Software",
      frequency: "Monthly",
      date: "2025-06-02",
      employee: "Alice",
    },
    {
      id: 4,
      title: "Outlook 365 Family (worklite)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-14",
      employee: "Mary Linda (hema)",
    },
    {
      id: 5,
      title: "Outlook 365 Family (ninja)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-14",
      employee: "Bryan Lawrence (Venu)",
    },
    {
      id: 6,
      title: "Outlook 365 Family (Freshdata)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-14",
      employee: "Helen Smith (Anjali)",
    },
    {
      id: 7,
      title: "Outlook 365 Family (leads)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-17",
      employee: "Paul Alexander ( rakesh)",
    },
    {
      id: 8,
      title: "Outlook 365 Family (leadmgr)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-21",
      employee: "michael D(kamalakar)",
    },
    {
      id: 9,
      title: "Outlook 365 Family (maxleads)",
      amount: 619,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-28",
      employee: "Alex bob ( sujji)",
    },
    {
      id: 10,
      title: "Outlook 365 Family  (ninja)",
      amount: 490,
      category: "Subscription",
      frequency: "Monthly",
      date: "2025-06-14",
      employee: "Bryan Lawrence (Venu)",
    },
    {
      id: 11,
      title: "Notion",
      amount: 490,
      category: "Software",
      frequency: "Monthly",
      date: "2025-06-02",
      employee: "Alice",
    },
    {
      id: 12,
      title: "Notion",
      amount: 490,
      category: "Software",
      frequency: "Monthly",
      date: "2025-06-02",
      employee: "Alice",
    },
    {
      id: 13,
      title: "Notion",
      amount: 490,
      category: "Software",
      frequency: "Monthly",
      date: "2025-06-02",
      employee: "Alice",
    },
  ]
};
