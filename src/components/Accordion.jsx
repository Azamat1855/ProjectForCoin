// Accordion.jsx

import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            <button className="flex gap-7 py-2 items-center text-sm" onClick={toggleAccordion}>
                <span>{title}</span>
                <svg className={`w-4 h-4 transition-transform transform ${isOpen ? 'rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute left-12 top-0 z-10 bg-white shadow-md py-2 px-4 rounded-md">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Accordion;
