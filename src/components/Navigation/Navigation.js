import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const NavLinkItem = ({ to, children }) => {
  return (
    <li className="navigation__item">
      <NavLink to={to} className="navigation__link" activeclassname="active">{children}</NavLink>
    </li>
  );
};

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list">
        <NavLinkItem to="/">Home</NavLinkItem>
        <NavLinkItem to="/concepts">Concepts</NavLinkItem>
        <NavLinkItem to="/expenses">Expenses</NavLinkItem>
        <NavLinkItem to="/course-goal">Course Goal</NavLinkItem>
        <NavLinkItem to="/investment">Investment</NavLinkItem>
      </ul>
    </div>
  );
};

export default Navigation;