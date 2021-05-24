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
        {filterdExpenses.length === 0 ? (
          <p>no expense found</p>
        ) : (
          filterdExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
