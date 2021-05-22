import React from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/expenses/Expenses';

const App = () => {
  const expense = [
    {
      id: 'el',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 2, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 994.67,
      date: new Date(2020, 1, 17),
    }
  ];
  const addExpenseHandler = (expense) => {
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
