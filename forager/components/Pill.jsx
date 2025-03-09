import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Pill = ({ text, bgColor }) => {
    const pillStyle = {
        backgroundColor: bgColor,
        color: bgColor === '#579076' ? '#FFFFFF' : '#7C7C7C',
        padding: '0px 17px',
        borderRadius: '100px',
        display: 'inline-block',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    const [filterSelected, setfilterSelected] = useState(false);

    const toggleFilter = () => {
        setfilterSelected(prevState  => !prevState);
    };

    return ( 
        <button style={pillStyle} onClick={toggleFilter} tabIndex="0" onKeyPress={(e) => { if (e.key === 'Enter' || e.key === ' ') toggelFilter(); }}>
            {text}
        </button>
    );
};

Pill.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
};

export default Pill;