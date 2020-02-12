import React from 'react';
import PropTypes from 'prop-types';

class MultiAnswer extends React.Component {
    render() {
        let {answer} = this.props;
        return (
            <label className="multi-answer">
                <div
                    className="question-answer"
                    tabIndex="0"
                >
                    {answer}
                </div>
                <input type="checkbox" onChange={this.#checkboxChangeHandle}/>
                <span className="checkmark"/>
            </label>
        );
    }

    #checkboxChangeHandle = e => {
        let {handleAnswerChange} = this.props;
        handleAnswerChange(e.target.checked);
    }
}

MultiAnswer.propTypes = {
    answer: PropTypes.element.isRequired,
    handleAnswerChange: PropTypes.func.isRequired
};

export default MultiAnswer;
