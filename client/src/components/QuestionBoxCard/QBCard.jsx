import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './QBCard.css';

const QBCard = ({ question, answere }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="qb-c">
            <button
                className={`qbc-qs ${isOpen ? 'open' : ''}`}
                onClick={toggleAnswer}
                aria-expanded={isOpen}
            >
                <span className="qbc-q">{question}</span>

                <div className="qbc-b">
                    <ChevronDown
                        size={45}
                        strokeWidth={1.2}
                        className={`qbc-icon ${isOpen ? 'rotate' : ''}`}
                    />
                </div>
            </button>

            <div className={`qb-as ${isOpen ? 'show' : ''}`}>
                <span className="qbc-a">{answere}</span>
            </div>
        </div>
    );
};

export default QBCard;