import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  /**
   * Constructor
   * @param  {} props
   */
  constructor(props) {
    super(props);
    this.state = { currentGuess: null };
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  submitGuessedWord(event) {
    const { currentGuess } = this.state;
    event.preventDefault();

    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    const { success } = this.props;

    const contents = success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mx-sm-3"
          type="text"
          value={this.state.currentGuess}
          placeholder="enter guess"
          onChange={event =>
            this.setState({ currentGuess: event.target.value })
          }
        />
        <button
          data-test="submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={event => this.submitGuessedWord(event)}>
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
