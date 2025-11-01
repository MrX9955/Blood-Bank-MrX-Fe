// src/components/Common/Button.jsx
import React from 'react';

export const Button = ({ children, onClick, type = "submit", className = "" }) => (
    <button
        type={type}
        onClick={onClick}
        className={`w-full py-3 px-4 font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105 ${className}`}
    >
        {children}
    </button>
);