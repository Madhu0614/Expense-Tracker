
export type Expense = {
  id: number;
  title: string;
  amount: number;
  category: string;
  date: string; 
};

export const getExpenses = async (): Promise<Expense[]> => {
  return [
    { id: 1, title: "Groceries", amount: 150, category: "Food", date: "2025-06-16" },
    { id: 2, title: "Uber", amount: 50, category: "Transport", date: "2025-06-15" },
    { id: 3, title: "Dinner", amount: 200, category: "Food", date: "2025-04-14" },
    { id: 4, title: "Gym", amount: 100, category: "Health", date: "2025-04-23" },
    { id: 5, title: "Movie", amount: 300, category: "Entertainment", date: "2025-04-22" },
    { id: 6, title: "Shopping", amount: 500, category: "Shopping", date: "2025-04-21" },
    { id: 7, title: "Lunch", amount: 120, category: "Food", date: "2025-04-20" },
    { id: 8, title: "Taxi", amount: 80, category: "Transport", date: "2025-04-19" },
    { id: 9, title: "Dinner with friends", amount: 250, category: "Food", date: "2025-04-18" },
    { id: 10, title: "Concert tickets", amount: 400, category: "Entertainment", date: "2025-04-17" },
    { id: 11, title: "Clothes shopping", amount: 600, category: "Shopping", date: "2025-04-16" },
    { id: 12, title: "Coffee with a friend", amount: 70, category: "Food", date: "2025-04-15" },
    { id: 13, title: "Bus fare", amount: 30, category: "Transport", date: "2025-04-14" },
    { id: 14, title: "Yoga class", amount: 90, category: "Health", date: "2025-04-13" },
    { id: 15, title: "Dinner at restaurant", amount: 220, category: "Food", date: "2025-04-12" },
    { id: 16, title: "Gas refill", amount: 1500, category: "Transport", date: "2025-04-11" },
    { id: 17, title: "Grocery shopping", amount: 8000, category: "Food", date:"2025-04-10"},
    { id :18 ,title:"Birthday gift for friend" ,amount :2000 ,category:"Shopping" ,date:"2025-04-09"},
  ];
};
