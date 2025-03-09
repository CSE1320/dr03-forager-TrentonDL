import React from "react";
import PropTypes from 'prop-types';

const BackButton = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick || (() => window.history.back())}>Back</button>
            <img src="../public/icons/back_button.png" alt="Back Arrow" />
        </div>
    );  
};

BackButton.propTypes = {
    onClick: PropTypes.func,
};

export default BackButton;