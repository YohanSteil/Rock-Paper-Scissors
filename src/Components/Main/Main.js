import React from "react";
import "./Main.scss";

const Main = ({onSelectOption, selectedOption }) => {

  if (selectedOption) {
    return null; // Ne rien afficher si une option est sélectionnée
  }
  return (
    <div className="mainLogo">
      <div className="test">
        <img src="images/bg-triangle.svg" alt="Triangle" />
      </div>

      <div className="imageRock">
        <img className="rock" src="images/icon-rock.svg" alt="Rock" onClick={() => onSelectOption('rock')}/>
        <img className="scissors" src="images/icon-scissors.svg" alt="Rock" onClick={() => onSelectOption('scissors')}/>
        <img className="paper" src="images/icon-paper.svg" alt="Rock" onClick={() => onSelectOption('paper')}/>
      </div>
    </div>
  );
};

export default Main;
