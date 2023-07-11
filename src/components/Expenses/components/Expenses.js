import React, {useState} from 'react';
import './Expenses.css';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />);
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={onFilterChangeHandler} />
      { expensesContent }
    </Card>
  );
}

export default Expenses;