import "./App.scss";
import React, { useState } from "react";

import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Selection from "./Components/Selection/Selection";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [count, setCount] = useState(0)

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(randomChoice);
    setComputerChoice(randomChoice)
    determineResult(option, randomChoice);
  };

  const determineResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setResult('Match nul')
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      setResult("You win !")
      setCount((prevCount) => prevCount + 1);
      
    } else {
      setResult("You lose ! ")
      setCount((prevCount) => Math.max(prevCount - 1, 0));
    }
  }

  const handleRestartGame = () => {
    setSelectedOption(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="App">
      <header className="App__header">
        <Header count={count} />
      </header>
      <main>
        <Main onSelectOption={handleSelectOption} selectedOption={selectedOption}/>
        <Selection computerChoice={computerChoice} selectedOption={selectedOption} result={result} onRestart={handleRestartGame}  />
        <Footer />
      </main>
    </div>
  );
}

export default App;
