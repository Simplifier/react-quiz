import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import SingleChoiceQuestion from './SingleChoiceQuestion';
import Prism from "prismjs";
import QuestionType from "../data/QuestionType";
import MultiChoiceQuestion from "./MultiChoiceQuestion";

class QuestionList extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        let {questions, handleSingleAnswer, handleMultiAnswer} = this.props;
        return (
            <ul className="question-list">
                {questions.map(question => (
                    question.type === QuestionType.SINGLE ?
                        <SingleChoiceQuestion
                            key={ReactDOMServer.renderToString(question.question)}
                            question={question.question}
                            answers={question.answers}
                            handleSingleAnswer={handleSingleAnswer}
                        /> :
                        <MultiChoiceQuestion
                            key={ReactDOMServer.renderToString(question.question)}
                            question={question.question}
                            answers={question.answers}
                            handleMultiAnswer={handleMultiAnswer}
                        />
                ))}
            </ul>
        );
    }
}

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
    handleSingleAnswer: PropTypes.func.isRequired,
    handleMultiAnswer: PropTypes.func.isRequired
};

export default QuestionList;
