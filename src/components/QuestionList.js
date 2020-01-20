import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Question from './Question';
import Prism from "prismjs";

class QuestionList extends React.Component {
    componentDidMount() {
        Prism.highlightAll();
    }

    render() {
        return (
            <ul className="question-list">
                {this.props.questions.map(question => {
                    return (
                        <Question
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
