import React, {useState} from "react";

function GuessInput({ handleGuess, disabled }) {
    const [guess, setGuess] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleGuess(guess);
      setGuess("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Guess the lucky number:
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(parseInt(e.target.value))}
            disabled={disabled}
            required
          />
        </label>
        <button type="submit" disabled={disabled}>
          Guess
        </button>
      </form>
    );
  }
  
  export default GuessInput;
