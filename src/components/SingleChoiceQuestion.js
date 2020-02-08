import React from 'react';
import PropTypes from 'prop-types';
import SingleAnswer from './SingleAnswer';

const SingleChoiceQuestion = ({ question, answers, handleAnswerClick, handleEnterPress }) => {
  return (
    <li className="question">
      <h2 className="question-title">
        {question}
      </h2>
      <ul className="question-answers" tabIndex="-1">
        {answers.map((answer, index) => {
          return (
            <SingleAnswer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              handleAnswerClick={handleAnswerClick(index)}
              handleEnterPress={(e) => {
                  if (e.keyCode === 13) {
                      this.handleAnswerClick(index)(e);
                  }
              }}
            />
          );
        })}
      </ul>
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
