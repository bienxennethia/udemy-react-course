import React, {useState} from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [displayForm, setDisplayForm] = useState(false);
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date)
    };
    props.onSaveExpenseData(expenseData);
    formDisplayHandler();
  };

  const formDisplayHandler = () => {
    setDisplayForm(!displayForm);
  }

  if (!displayForm) {
    return <button onClick={formDisplayHandler}>Add New Expense</button>
  }

  return <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' name="title" value={userInput.title} onChange={inputChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' name="amount" min='0.01' step='0.01' onChange={inputChangeHandler} />
      </div>
      <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' name="date" min='2019-01-01' max='2022-12-31' onChange={inputChangeHandler} />
      </div>
    </div>
    <div className='new-expense__actions'>
      <button onClick={formDisplayHandler}>Cancel</button>
      <button type='submit'>Add Expense</button>
    </div>
  </form>;
}

export default ExpenseForm;