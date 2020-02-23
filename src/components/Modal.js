import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({modal: {state, praise, points}}) => (
    <div className={'correct-modal' + (state === 'show' ? ' modal-enter' : '')}>
        <div className="panel">
            <div className="praise">{praise}</div>
            <div className="points">{points}</div>
        </div>
    </div>
);

Modal.propTypes = {
    modal: PropTypes.shape({
        state: PropTypes.string.isRequired,
        praise: PropTypes.string.isRequired,
        points: PropTypes.string.isRequired
    })
};

export default Modal;
