// src/components/Modals/EditUserModal.jsx
import React from 'react';
import { Input } from '../Auth/Input.jsx';

export const EditUserModal = ({ user, onSave, onCancel }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            ...user,
            name: e.target.elements.name.value,
            email: e.target.elements.email.value,
            bloodGroup: e.target.elements.bloodGroup.value,
            location: e.target.elements.location.value,
        };
        onSave(updatedUser);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Edit User</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 text-3xl font-light">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <Input id="name" type="text" placeholder="Full Name" defaultValue={user.name} />
                    <Input id="email" type="email" placeholder="Email Address" defaultValue={user.email} />
                    <Input id="bloodGroup" type="text" placeholder="Blood Group" defaultValue={user.bloodGroup} />
                    <Input id="location" type="text" placeholder="Location" defaultValue={user.location} />
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};