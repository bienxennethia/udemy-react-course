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

  return (
    <Card className='expenses'>
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={onFilterChangeHandler} />
      { 
        props.items.map((expense, key) => <ExpenseItem key={key} title={expense.title} amount={expense.amount} date={expense.date} />)
      }
    </Card>
  );
}

export default Expenses;