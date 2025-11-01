// src/components/Auth/Input.jsx
import React from 'react';

export const Input = ({ id, type, placeholder, icon, defaultValue }) => (
    <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
        </div>
        <input
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
            required
        />
    </div>
);