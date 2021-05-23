import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [prevValue, setValue] = useState("2020");

  const ExpenseFilterHandler = (expenseFilter) => {
    setValue(expenseFilter);
  };

  return (
    <div>
      <Card className="container">
        <ExpenseFilter
          onExpenseFilter={ExpenseFilterHandler}
          selected={prevValue}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
