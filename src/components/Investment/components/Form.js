import React, {useState} from "react";

import "./Form.css";

import InputGroup from "../UI/InputGroup";
import Button from "../UI/Button";
import Field from "./Field";

  const defaultUserInput = {
    'current-savings': 10000,
    'yearly-contribution': 1200,
    'expected-return': 7,
    'duration': 10
  };

const Form = (props) => {

  const [userInput, setUserInput] = useState(defaultUserInput);

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, [event.target.id]: +event.target.value };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const onResetHandler = (event) => {
    event.preventDefault();
    setUserInput(defaultUserInput);
    props.onReset();
  };

  return (
    <form className="form" onSubmit={onSubmitHandler} onReset={onResetHandler}>
      <InputGroup>
        <Field id="current-savings" label="Current Savings ($)" userInput={userInput} onChangeHandler={inputChangeHandler} />
        <Field id="yearly-contribution" label="Yearly Savings ($)" userInput={userInput} onChangeHandler={inputChangeHandler} />
      </InputGroup>
      <InputGroup>
        <Field id="expected-return" label="Expected Return (%)" userInput={userInput} onChangeHandler={inputChangeHandler} />
        <Field id="duration" label="Duration (years)" userInput={userInput} onChangeHandler={inputChangeHandler} />
      </InputGroup>
      <p className="actions">
        <Button type="reset" className="buttonAlt">
          Reset
        </Button>
        <Button type="submit" className="button">
          Calculate
        </Button>
      </p>
    </form>
  )
};

export default Form;