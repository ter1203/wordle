import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters");
      return;
    }
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={gameStatus !== "running"}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        required
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}

export default GuessInput;
