import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage__title">Welcome to my React Training</h1>
      <p>
        This is a collection of React projects that I have created while
        learning React.
      </p>
      <p>
        The projects are based on the Udemy course{" "}
        <a
          href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
          className="homepage__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          React - The Complete Guide (incl Hooks, React Router, Redux)
        </a>{" "}
        by Maximilian Schwarzmüller.
      </p>
      <p>
        The course is a great way to learn React. It is very comprehensive and
        covers all the important topics. I highly recommend it.
      </p>
      <h3 className="homepage__subtitle">Projects:</h3>
      <ul className="homepage__list">
        <li className="homepage__item">
          <Link to="/" className="homepage__link">Home</Link>
        </li>
        <li className="homepage__item">
          <Link to="/concepts" className="homepage__link">Concepts</Link>
        </li>
        <li className="homepage__item">
          <Link to="/expenses" className="homepage__link">Expenses</Link>
        </li>
        <li className="homepage__item">
          <Link to="/course-goal" className="homepage__link">Course Goal</Link>
        </li>
        <li className="homepage__item">
          <Link to="/investment" className="homepage__link">Investment</Link>
        </li>
      </ul>
    </div>
  );
};

export default Homepage;