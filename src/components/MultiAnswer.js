import React from 'react';
import PropTypes from 'prop-types';

class MultiAnswer extends React.Component {
    state = {
        checked: false
    };

    render() {
        const {answer} = this.props;
        const {checked} = this.state;
        return (
            <div className="multi-answer" onClick={this.#handleCheckboxClick}>
                <div className="question-answer" tabIndex="0">
                    {answer}
                </div>
                <span className={"checkmark" + (checked ? ' checked' : '')}/>
            </div>
        );
    }

    #handleCheckboxClick = e => {
        this.setState(state => {
            const checked = !state.checked;
            const {handleAnswerChange} = this.props;
            handleAnswerChange(checked);

            return {checked};
        });
    };
}

MultiAnswer.propTypes = {
    answer: PropTypes.element.isRequired,
    handleAnswerChange: PropTypes.func.isRequired
};

export default MultiAnswer;
