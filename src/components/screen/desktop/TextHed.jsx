import React from 'react';
import './TextHed.css'; // Assuming you have your CSS in a separate file

const TextHed = ({ text }) => {
    return (
        <div className="text-component">
            {text}
        </div>
    );
}

export default TextHed;
