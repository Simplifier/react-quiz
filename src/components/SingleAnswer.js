import React from 'react';
import PropTypes from 'prop-types';

const SingleAnswer = ({answer, handleAnswerClick, correctnessClass}) => (
    <li
        className={`question-answer ${correctnessClass}`}
        tabIndex="0"
        onClick={handleAnswerClick}
        onKeyDown={e => {
            if (e.keyCode === 13) {
                handleAnswerClick(e);
            }
        }}
    >
        {answer}
    </li>
);

SingleAnswer.propTypes = {
    answer: PropTypes.node.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    correctnessClass: PropTypes.string.isRequired,
};

export default SingleAnswer;
