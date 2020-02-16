import React from 'react';
import PropTypes from 'prop-types';
import SingleAnswer from './SingleAnswer';

class SingleChoiceQuestion extends React.Component {
    selectedAnswers = [];

    render() {
        let {question, answers} = this.props;
        return (
            <li className="question">
                <h2 className="question-title">
                    {question}
                </h2>
                <ul className={`question-answers ${this.selectedAnswers.indexOf(true) !== -1 ? 'right' : ''}`} tabIndex="-1">
                    {answers.map((answer, index) => {
                        let correctnessClass = '';
                        if (index in this.selectedAnswers) {
                            correctnessClass = this.selectedAnswers[index] ? 'right' : 'wrong';
                        }
                        return (
                            <SingleAnswer
                                key={JSON.stringify(answer.props.children)}
                                answer={answer}
                                handleAnswerClick={this.#handleAnswerClick(index)}
                                correctnessClass={correctnessClass}
                            />
                        );
                    })}
                </ul>
            </li>
        );
    }

    #handleAnswerClick = index => e => {
        if (e.target.nodeName === 'LI') {
            const isCorrect = this.props.handleSingleAnswer(index);
            this.selectedAnswers[index] = isCorrect;
        }
    };
}

SingleChoiceQuestion.propTypes = {
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
    handleSingleAnswer: PropTypes.func.isRequired
};

export default SingleChoiceQuestion;
