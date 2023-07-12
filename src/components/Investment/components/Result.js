import React from "react";

import "./Result.css";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const formatCurrency = (value) => {
  return formatter.format(value);
}

const Result = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {
          props.results.length === 0 && <tr><td colSpan="5" style={{textAlign: 'center'}}>No data available</td></tr>
        }
        { 
          props.results.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{formatCurrency(item.savingsEndOfYear)}</td>
                <td>{formatCurrency(item.yearlyInterest)}</td>
                <td>{formatCurrency(
                  item.savingsEndOfYear - props.initialInvestment - item.yearlyContribution * item.year
                )}</td>
                <td>{formatCurrency(
                  props.initialInvestment + item.yearlyContribution * item.year
                )}</td>
              </tr>
            );
          }
        )
        }
      </tbody>
    </table>
  );
}

export default Result;