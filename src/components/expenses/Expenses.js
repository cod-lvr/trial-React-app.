import React, { useState } from "react";
import "./Expenses.css";
import ExpensesList from  './ExpensesList';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [prevValue, setValue] = useState("2020");

  const ExpenseFilterHandler = (expenseFilter) => {
    setValue(expenseFilter);
  };

  const filterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === prevValue;
  });

  return (
    <div>
      <Card className="container">
        <ExpenseFilter
          onExpenseFilter={ExpenseFilterHandler}
          selected={prevValue}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
