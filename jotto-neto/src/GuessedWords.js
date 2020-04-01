import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords({ guessedWords }) {
  let contents;

  if (guessedWords.length === 0) {
    contents = (
      <span data-test="guess-instructions">Try to Guess the secret word!</span>
    );
  }
  return <div data-test="component-guessed-words">{contents}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWords;