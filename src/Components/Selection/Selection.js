import React from "react";
import "./Selection.scss";

const Selection = ({computerChoice, selectedOption, result, onRestart }) => {
  
  const getWinnerClass = (choice) => {
    if (!result) return "";
    if (result === "Match nul") return "";
    if ((result === "You win!" && choice === selectedOption) || (result === "You lose!" && choice === computerChoice)) {
      return "winner";
    }
    return "";
  };

  return (
    <>
    <div className="pickedOption">
      {selectedOption && (
        <div className={`pickedOption__pickedUser ${getWinnerClass(selectedOption)}`}>
          <h2 className="pickedOption__title">YOU PICKED</h2>
            <img
            className={`pickedOption__${selectedOption}`}
            src={`images/icon-${selectedOption}.svg`}
            alt={selectedOption}
          />
          </div>
          
        )}
        
     {computerChoice && (
      <div className={`pickedOption__pickedComputer ${getWinnerClass(computerChoice)}`}>
          <h2 className="pickedOption__title">THE HOUSE PICKED</h2>
          <img
            className={`pickedOption__${computerChoice}`}
            src={`images/icon-${computerChoice}.svg`}
            alt={computerChoice}
          />
        </div>
      )}
      
      </div>

       {result && (
          <>
        <div className="pickedOption__resultMessage">
              <h2>{result}</h2>
              <div className="btnRestart">
       {selectedOption && computerChoice && (
        <button onClick={onRestart}>PLAY AGAIN</button>
      )}
            </div>
          </div>
            </>
      )}
    </>
  );
};

export default Selection;
