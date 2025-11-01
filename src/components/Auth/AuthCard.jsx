// src/components/Auth/AuthCard.jsx
import React from 'react';
import { IconBloodDrop } from '../Common/Icons.jsx';

export const AuthCard = ({ children, title }) => (
    <div className="min-h-screen bg-red-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
            <div className="bg-white shadow-2xl rounded-2xl p-8 space-y-6 transform transition-all hover:scale-105">
                <div className="flex flex-col items-center space-y-2">
                    <IconBloodDrop className="w-16 h-16 text-red-600" />
                    <h1 className="text-3xl font-bold text-gray-800">BloodLink</h1>
                    <p className="text-gray-500">{title}</p>
                </div>
                {children}
            </div>
        </div>
    </div>
);