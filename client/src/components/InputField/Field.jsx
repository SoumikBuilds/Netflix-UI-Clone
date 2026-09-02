import React, { useState } from 'react';
import './Field.css';

const Field = ({ text }) => {
    const [inputText, setInputText] = useState('');

    return (
        <div className="field-container">
            <input
                type="text"
                id="field-input"
                placeholder=" "
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />

            <label htmlFor="field-input">
                {text}
            </label>
        </div>
    );
};

export default Field;