import React, { Component } from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Input from './Input';

export class UnconnectedApp extends Component {
  /**
   */
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is: {this.props.secretWord}</div>
        <Input />
        <Congrats success={this.props.success} />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ guessedWords, secretWord, success }) => {
  return {
    guessedWords,
    success,
    secretWord,
  };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
