import React from 'react';
import PropTypes from 'prop-types';
import MultiAnswer from "./MultiAnswer";

class MultiChoiceQuestion extends React.Component {
    selectedAnswers = [];

    render() {
        let {question, answers} = this.props;
        return (
            <li className="question">
                <h2 className="question-title">
                    {question}
                </h2>
                <div className="multi-answers" tabIndex="-1">
                    {answers.map((answer, index) => (
                        <MultiAnswer
                            key={JSON.stringify(answer.props.children)}
                            answer={answer}
                            handleAnswerChange={this.#handleAnswerChange(index)}
                        />
                    ))}
                </div>
                <button className="submit-answer" onClick={this.#handleAnswerClick}>Submit</button>
            </li>
        );
    }

    #handleAnswerChange = index => checked => {
        this.selectedAnswers[index] = {index, checked};
    };

    #handleAnswerClick = (e) => {
        const selected = this.selectedAnswers.filter(a => a.checked).map(a => a.index);
        const isCorrect = this.props.handleMultiAnswer(selected);

        const answers = e.target.parentElement.querySelector('.multi-answers');
        answers.classList.remove('right', 'wrong');
        if (isCorrect) {
            // Prevent other answers from being clicked after correct answer is clicked
            e.target.parentNode.style.pointerEvents = 'none';

            answers.classList.add('right');
        } else {
            answers.classList.add('wrong');
        }
    };
}

MultiChoiceQuestion.propTypes = {
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
    handleMultiAnswer: PropTypes.func.isRequired
};

export default MultiChoiceQuestion;
