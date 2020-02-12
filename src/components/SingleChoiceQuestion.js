import React from 'react';
import PropTypes from 'prop-types';
import SingleAnswer from './SingleAnswer';

class SingleChoiceQuestion extends React.Component {
    render() {
        let {question, answers} = this.props;
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
                                handleAnswerClick={this.#handleAnswerClick(index)}
                                handleEnterPress={(e) => {
                                    if (e.keyCode === 13) {
                                        this.#handleAnswerClick(index)(e);
                                    }
                                }}
                            />
                        );
                    })}
                </ul>
            </li>
        );
    }

    #handleAnswerClick = (index) => (e) => {
        const isCorrect = this.props.handleSingleAnswer(index);

        if (e.target.nodeName === 'LI'){
            if (isCorrect) {
                // Prevent other answers from being clicked after correct answer is clicked
                e.target.parentNode.style.pointerEvents = 'none';

                e.target.classList.add('right');
            } else {
                e.target.style.pointerEvents = 'none';
                e.target.classList.add('wrong');
            }
        }
    };
}

SingleChoiceQuestion.propTypes = {
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
    handleSingleAnswer: PropTypes.func.isRequired
};

export default SingleChoiceQuestion;
