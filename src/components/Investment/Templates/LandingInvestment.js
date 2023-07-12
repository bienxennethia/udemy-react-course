import React, {useState} from 'react';
import './LandingInvestment.css';

import Header from '../components/Header';
import Form from '../components/Form';
import Result from '../components/Result';

function LandingInvestment() {
  const [userInput, setUserInput] = useState([]);
  const [results, setResults] = useState([]);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);

    let yearlyData = [];
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData);
  };

  const resetHandler = () => {
    setResults([]);
  };

  return (
    <div>
      <Header />
      <Form onCalculate={calculateHandler} onReset={resetHandler} />
      <Result results={results} initialInvestment={userInput['current-savings']} />
    </div>
  );
}

export default LandingInvestment;
