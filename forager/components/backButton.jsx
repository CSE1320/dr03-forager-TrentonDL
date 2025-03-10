import React from "react";
import PropTypes from 'prop-types';
import app from '@/server'; // Import the server if needed

const BackButton = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick || (() => window.history.back())}>Back</button>
            <img src="/icons/back_button.png" alt="Back Arrow" />
        </div>
    );  
};

BackButton.propTypes = {
    onClick: PropTypes.func,
};

export default BackButton;