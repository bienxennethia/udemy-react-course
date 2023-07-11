import React, {useState} from 'react';
import './Expenses.css';

import Card from '../../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={onFilterChangeHandler} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;