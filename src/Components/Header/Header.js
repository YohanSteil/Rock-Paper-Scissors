import React from "react";
import "./Header.scss";

const Header = ({count}) => {
  return (
    <div className="header">
      <div className="header__title">
        <p>ROCK</p>
        <p>PAPER</p>
        <p>SCISSORS</p>
      </div>
      <div className="header__score">
        <p className="header__score__score">SCORE</p>
        <p className="header__score__number">{count}</p>
      </div>
    </div>
  );
};

export default Header;
