import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/expenses/Expenses";

const DOUMMY = [
  {
    id: "el",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 994.67,
    date: new Date(2020, 1, 17),
  },
  {
    id: "e4",
    title: "Book buying",
    amount: 55.0,
    date: new Date(2021, 2, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DOUMMY);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
