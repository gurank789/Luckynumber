import React,{useState} from "react";
import GuessInput from "../Molecules/Guessinput";
import GuessResult from "../Organisms/GuessResult";
function LuckyNumberGame() {
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState("");
    const [attempts, setAttempts] = useState(0);
    const [result, setResult] = useState("");
  
    const handleGuess = (guess) => {
      setGuess(guess);
      setAttempts(attempts + 1);
      if (guess < luckyNumber) {
        setResult(`You guessed ${guess}. The lucky number is bigger.`);
      } else if (guess > luckyNumber) {
        setResult(`You guessed ${guess}. The lucky number is smaller.`);
      } else {
        setResult(`Congratulations! You guessed the lucky number in ${attempts + 1} attempts.`);
      }
    };
  
    return (
      <div>
        <h1>Lucky Number Game</h1>
        <GuessInput handleGuess={handleGuess} disabled={result !== ""} />
        <GuessResult result={result} />
      </div>
    );
  }
  
  export default LuckyNumberGame;