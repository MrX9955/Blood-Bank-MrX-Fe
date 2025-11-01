// src/components/Common/DashboardFrame.jsx
import React from 'react';

export const DashboardFrame = ({ title, children, icon }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full transform transition-shadow hover:shadow-2xl">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold text-gray-800 ml-3">{title}</h3>
        </div>
        <div className="flex-grow space-y-4 overflow-y-auto pr-2">
            {children}
        </div>
    </div>
);