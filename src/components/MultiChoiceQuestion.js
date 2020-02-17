import React from 'react';
import PropTypes from 'prop-types';
import MultiAnswer from "./MultiAnswer";

class MultiChoiceQuestion extends React.Component {
    selectedAnswers = [];
    state = {
        answerGiven: false,
        isCorrect: false
    };

    render() {
        const {answerGiven, isCorrect} = this.state;
        let correctnessClass = '';
        if (answerGiven) {
            correctnessClass = isCorrect ? 'right' : 'wrong';
        }

        const {question, answers} = this.props;
        return (
            <li className={`question ${correctnessClass}`}>
                <h2 className="question-title">
                    {question}
                </h2>
                <div className="multi-answers" tabIndex="-1">
                    {answers.map((answer, index) => (
                        <MultiAnswer
                            key={index}
                            answer={answer}
                            handleAnswerChange={this.#handleAnswerChange(index)}
                        />
                    ))}
                </div>
                <button className="submit-answer" onClick={this.#handleSubmitClick}>Submit</button>
            </li>
        );
    }

    #handleAnswerChange = index => checked => {
        this.selectedAnswers[index] = {index, checked};
        this.setState({
            answerGiven: false
        });
    };

    #handleSubmitClick = e => {
        const selected = this.selectedAnswers.filter(a => a.checked).map(a => a.index);
        const isCorrect = this.props.handleMultiAnswer(selected);
        this.setState({
            answerGiven: true,
            isCorrect
        });
    };
}

MultiChoiceQuestion.propTypes = {
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
    handleMultiAnswer: PropTypes.func.isRequired
};

export default MultiChoiceQuestion;
