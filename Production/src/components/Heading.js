import React from 'react';
import '../styles/Heading.css';

const Heading = ({ headingText }) => {
    return (
        <center>
            <h3 className="stats-border-bottom h-5">{headingText}</h3>
        </center>
    );
};

export default Heading;