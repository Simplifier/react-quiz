import React from 'react';
import PropTypes from 'prop-types';
import SingleAnswer from './SingleAnswer';

class SingleChoiceQuestion extends React.Component {
    constructor(props) {
        super(props);
        let {answers} = props;
        this.state = {
            selectedAnswers: new Array(answers.length).fill('')
        }
    }

    render() {
        const {question, answers} = this.props;
        const {selectedAnswers} = this.state;
        return (
            <li className="question">
                <h2 className="question-title">
                    {question}
                </h2>
                <ul className={`question-answers ${this.#isComplete() ? 'right' : ''}`} tabIndex="-1">
                    {answers.map((answer, index) => (
                        <SingleAnswer
                            key={index}
                            answer={answer}
                            handleAnswerClick={this.#handleAnswerClick(index)}
                            correctnessClass={selectedAnswers[index]}
                        />
                    ))}
                </ul>
            </li>
        );
    }

    #handleAnswerClick = index => e => {
        if (e.target.nodeName === 'LI') {
            const isCorrect = this.props.handleSingleAnswer(index);
            const {selectedAnswers} = this.state;
            selectedAnswers[index] = isCorrect ? 'right' : 'wrong';
            this.setState({selectedAnswers});
        }
    };

    #isComplete = () => {
        const {selectedAnswers} = this.state;
        return selectedAnswers.indexOf('right') !== -1;
    };
}

SingleChoiceQuestion.propTypes = {
    question: PropTypes.element.isRequired,
    answers: PropTypes.array.isRequired,
    handleSingleAnswer: PropTypes.func.isRequired
};

export default SingleChoiceQuestion;
