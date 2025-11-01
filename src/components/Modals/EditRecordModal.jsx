// src/components/Modals/EditRecordModal.jsx
import React from 'react';

export const EditRecordModal = ({ record, onSave, onCancel }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedRecord = {
            ...record,
            donorName: e.target.elements.donorName.value,
            recipientName: e.target.elements.recipientName.value,
            hospital: e.target.elements.hospital.value,
            status: e.target.elements.status.value,
        };
        onSave(updatedRecord);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 animate-fade-in-up">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Edit Record</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800 text-3xl font-light">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <input name="donorName" placeholder="Donor Name" className="w-full p-3 border rounded-lg" defaultValue={record.donorName} />
                    <input name="recipientName" placeholder="Recipient Name" className="w-full p-3 border rounded-lg" defaultValue={record.recipientName} />
                    <input name="hospital" placeholder="Hospital" className="w-full p-3 border rounded-lg" defaultValue={record.hospital} />
                    <select name="status" defaultValue={record.status} className="w-full p-3 border rounded-lg" required>
                        <option>Completed</option>
                        <option>In Transit</option>
                        <option>In Stock</option>
                    </select>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};