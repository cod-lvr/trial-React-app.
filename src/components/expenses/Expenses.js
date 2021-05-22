import React, { useState } from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [prevValue, setValue] = useState('2020');

  const ExpenseFilterHandler = (expenseFilter) => {
    setValue(expenseFilter);
  };

  return (
    <div>
      <Card className="container">
        <ExpenseFilter onExpenseFilter={ExpenseFilterHandler} selected={prevValue} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
