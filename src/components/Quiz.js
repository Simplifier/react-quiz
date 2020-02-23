import React from 'react';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';

const Quiz = ({step, questions, totalQuestions, score, handleSingleAnswer, handleMultiAnswer}) => (
    <div className="wrapper">
        <div className="question-count">
            <h2>Question</h2>
            <div className="question-number">{step}</div>
            <div className="description">of <span>{totalQuestions}</span></div>
        </div>
        <div className="questions">
            <QuestionList
                questions={questions}
                handleSingleAnswer={handleSingleAnswer}
                handleMultiAnswer={handleMultiAnswer}
            />
        </div>
        <div className="score-container">
            <h2>Score</h2>
            <div className="score">{score}</div>
            <div className="description">points</div>
        </div>
    </div>
);

Quiz.propTypes = {
    step: PropTypes.number.isRequired,
    questions: PropTypes.array.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    handleSingleAnswer: PropTypes.func.isRequired,
    handleMultiAnswer: PropTypes.func.isRequired
};

export default Quiz;
