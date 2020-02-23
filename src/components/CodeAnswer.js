import React from 'react';
import PropTypes from 'prop-types';

const CodeAnswer = ({answer, lang}) => (
    <pre>
        <code className={`lang-${lang}`}>{answer}</code>
    </pre>
);

CodeAnswer.propTypes = {
    answer: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
};

export default CodeAnswer;
