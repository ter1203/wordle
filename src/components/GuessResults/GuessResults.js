import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ value, id }) => {
        return (
          <p className="guess" key={id}>
            {value}
          </p>
        );
      })}
      <p className="guess">GUESS</p>
    </div>
  );
}

export default GuessResults;
