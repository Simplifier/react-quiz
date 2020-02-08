import React from 'react';
import PropTypes from 'prop-types';

const MultiAnswer = ({answer, handleAnswerClick, handleEnterPress}) => {
    return (
        <label className="multi-answer">
            <div
                className="question-answer"
                tabIndex="0"
                onClick={handleAnswerClick}
                onKeyDown={handleEnterPress}>{answer}
            </div>
            <input type="checkbox"/>
            <span className="checkmark"/>
        </label>
    );
};

MultiAnswer.propTypes = {
    answer: PropTypes.element.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    handleEnterPress: PropTypes.func.isRequired
};

export default MultiAnswer;
