import React from 'react';
import PropTypes from 'prop-types';
import tally from '../helpers/tally';

const Results = ({userAnswers, score, restartQuiz}) => {
    const ordinals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
    const triesTotal = tally(userAnswers);
    let triesMarkup = [];
    for (let i in triesTotal) {
        triesMarkup.push(<div><strong>{triesTotal[i]}</strong> on the {ordinals[i - 1]} try.</div>);
    }

    return (
        <div className="results-container">
            <h2>Quiz Results</h2>
            <div>You answered...</div>
            {triesMarkup}
            <div className="results-total">Your Total Score is <strong>{score}</strong>.</div>
            <a onClick={restartQuiz}>Restart Quiz</a>
        </div>
    );
};

Results.propTypes = {
    userAnswers: PropTypes.array.isRequired,
    score: PropTypes.number.isRequired,
    restartQuiz: PropTypes.func.isRequired
};

export default Results;
