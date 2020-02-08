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
        return (
            <ul className="question-list">
                {this.props.questions.map(question => {
                    return (
                        question.type === QuestionType.SINGLE ?
                        <SingleChoiceQuestion
                            key={ReactDOMServer.renderToString(question.question)}
                            question={question.question}
                            answers={question.answers}
                            handleAnswerClick={this.props.handleAnswerClick}
                            handleEnterPress={this.props.handleEnterPress}
                        /> :
                        <MultiChoiceQuestion
                            key={ReactDOMServer.renderToString(question.question)}
                            question={question.question}
                            answers={question.answers}
                            handleAnswerClick={this.props.handleAnswerClick}
                            handleEnterPress={this.props.handleEnterPress}
                        />
                    );
                })}
            </ul>
        );
    }
}

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired,
    handleAnswerClick: PropTypes.func.isRequired,
    handleEnterPress: PropTypes.func.isRequired
};

export default QuestionList;
