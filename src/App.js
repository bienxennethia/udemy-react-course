import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingConcepts from './components/Concepts/Templates/LandingConcepts';
import LandingExpenses from './components/Expenses/Templates/LandingExpenses';
import LandingCourseGoal from './components/CourseGoal/Templates/LandingCourseGoal';
import LandingInvestment from './components/Investment/Templates/LandingInvestment';
import Navigation from './components/Navigation/Navigation';
import Homepage from './components/Homepage/Homepage';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/concepts" element={<LandingConcepts />} />
        <Route exact path="/expenses" element={<LandingExpenses />} />
        <Route exact path="/course-goal" element={<LandingCourseGoal />} />
        <Route exact path="/investment" element={<LandingInvestment />} />
      </Routes>
    </Router>
  );
};

export default App;
