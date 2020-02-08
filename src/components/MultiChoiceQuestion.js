import React from 'react';
import PropTypes from 'prop-types';
import MultiAnswer from "./MultiAnswer";

const SingleChoiceQuestion = ({question, answers, handleAnswerClick, handleEnterPress}) => {
    return (
        <li className="question">
            <h2 className="question-title">
                {question}
            </h2>
            <div className="multi-answers" tabIndex="-1">
                {answers.map((answer, index) => {
                    return (
                        <MultiAnswer
                            key={JSON.stringify(answer.props.children)}
                            answer={answer}
                            handleAnswerClick={handleAnswerClick(index)}
                            handleEnterPress={handleEnterPress(index)}
                        />
                    );
                })}
                <button className="submit-answer">Submit</button>
            </div>
        </li>
    );
};

SingleChoiceQuestion.propTypes = {
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    handleEnterPress: PropTypes.func.isRequired
};

export default SingleChoiceQuestion;
