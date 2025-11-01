// src/components/Modals/EditHospitalModal.jsx
import React from 'react';
import { indianStates } from '../../data/mockData.js';

export const EditHospitalModal = ({ hospital, onSave, onCancel }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedHospital = {
            ...hospital,
            name: e.target.elements.name.value,
            city: e.target.elements.city.value,
            state: e.target.elements.state.value,
            bloodGroups: e.target.elements.bloodGroups.value.split(',').map(bg => bg.trim().toUpperCase()),
        };
        onSave(updatedHospital);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Edit Hospital</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 text-3xl font-light">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <input name="name" placeholder="Hospital Name" className="w-full p-3 border rounded-lg" defaultValue={hospital.name} required />
                    <input name="city" placeholder="City" className="w-full p-3 border rounded-lg" defaultValue={hospital.city} required />
                    <select name="state" className="w-full p-3 border rounded-lg" defaultValue={hospital.state} required>
                        {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                    <input name="bloodGroups" placeholder="Blood Groups (e.g. A+, O-)" className="w-full p-3 border rounded-lg" defaultValue={hospital.bloodGroups.join(', ')} required />
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};