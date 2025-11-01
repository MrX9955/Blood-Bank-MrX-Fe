// src/components/Common/ConfirmationModal.jsx
import React from 'react';

export const ConfirmationModal = ({ message, onConfirm, onCancel }) => (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in-up">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-sm">
            <div className="p-6">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Confirm Action</h2>
                <p className="text-gray-600 mb-6">{message}</p>
                <div className="flex justify-end space-x-3">
                    <button onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                    <button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Confirm</button>
                </div>
            </div>
        </div>
    </div>
);