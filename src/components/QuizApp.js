import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';
import Quiz from './Quiz';
import Modal from './Modal';
import Results from './Results';
import shuffleQuestions from '../helpers/shuffleQuestions';
import QUESTION_DATA from '../data/quiz-data';
import sortInOrder from "../helpers/sortInOrder";
import QuestionType from "../data/QuestionType";

class QuizApp extends Component {
    state = {
        ...this.getInitialState(this.props.totalQuestions)
    };

    static propTypes = {
        totalQuestions: PropTypes.number.isRequired
    };

    getInitialState(totalQuestions) {
        totalQuestions = Math.min(totalQuestions, QUESTION_DATA.length);
        const QUESTIONS = shuffleQuestions(QUESTION_DATA)
            .slice(0, totalQuestions) // take totalQuestions questions
            .map(q => ({...q})); // shallow copy

        QUESTIONS.forEach(q => {
            if (!q.shuffle) {
                return;
            }

            let shuffledIndices = shuffleQuestions([...Array(q.answers.length).keys()]);
            if (q.type === QuestionType.SINGLE) {
                q.correct = shuffledIndices.indexOf(q.correct);
            } else if (q.type === QuestionType.MULTI) {
                q.correct = q.correct.map(c => shuffledIndices.indexOf(c));
            }
            q.answers = sortInOrder(q.answers, shuffledIndices);
        });

        return {
            questions: QUESTIONS,
            totalQuestions: totalQuestions,
            userAnswers: QUESTIONS.map(() => ({
                tries: 0
            })),
            step: 1,
            score: 0,
            modal: {
                state: 'hide',
                praise: '',
                points: ''
            }
        };
    }

    handleSingleAnswer = (selectedIndex) => {
        const isCorrect = this.state.questions[0].correct === selectedIndex;
        this.#handleAnswer(isCorrect);
        return isCorrect;
    };

    handleMultiAnswer = selectedIndices => {
        const isCorrect = this.#arraysEqual(this.state.questions[0].correct, selectedIndices);
        this.#handleAnswer(isCorrect);
        return isCorrect;
    };

    #arraysEqual(arrayA, arrayB) {
        return [...new Set(arrayA)].sort().join() === [...new Set(arrayB)].sort().join();
    }

    #handleAnswer(isCorrect) {
        const {step, userAnswers} = this.state;
        const currentStep = step - 1;
        const tries = userAnswers[currentStep].tries;

        userAnswers[currentStep] = {
            tries: tries + 1
        };
        this.setState({
            userAnswers: userAnswers
        });

        if (isCorrect) {
            setTimeout(() => this.showModal(tries), 750);
            setTimeout(this.nextStep, 2750);
        }
    }

    showModal = (tries) => {
        let praise;
        let points;

        switch (tries) {
            case 0: {
                praise = '1st Try!';
                points = '+10';
                break;
            }
            case 1: {
                praise = '2nd Try!';
                points = '+5';
                break;
            }
            case 2: {
                praise = 'Correct!';
                points = '+2';
                break;
            }
            default: {
                praise = 'Correct!';
                points = '+1';
            }
        }

        this.setState({
            modal: {
                state: 'show',
                praise,
                points
            }
        });
    };

    nextStep = () => {
        const {questions, userAnswers, step, score} = this.state;
        const restOfQuestions = questions.slice(1);
        const currentStep = step - 1;
        const tries = userAnswers[currentStep].tries;

        this.setState({
            step: step + 1,
            score: this.updateScore(tries, score),
            questions: restOfQuestions,
            modal: {
                state: 'hide'
            }
        });
    };

    updateScore(tries, score) {
        switch (tries) {
            case 1:
                return score + 10;
            case 2:
                return score + 5;
            case 3:
                return score + 2;
            default:
                return score + 1;
        }
    }

    restartQuiz = () => {
        this.setState({
            ...this.getInitialState(this.props.totalQuestions)
        });
    };

    render() {
        const {step, questions, userAnswers, totalQuestions, score, modal} = this.state;

        if (step >= totalQuestions + 1) {
            return (
                <Results
                    score={score}
                    restartQuiz={this.restartQuiz}
                    userAnswers={userAnswers}
                />
            );
        } else return (
            <Fragment>
                <Quiz
                    step={step}
                    questions={questions}
                    totalQuestions={totalQuestions}
                    score={score}
                    handleSingleAnswer={this.handleSingleAnswer}
                    handleMultiAnswer={this.handleMultiAnswer}
                />
                {modal.state === 'show' && <Modal modal={modal}/>}
            </Fragment>
        );
    }
}

export default QuizApp;
