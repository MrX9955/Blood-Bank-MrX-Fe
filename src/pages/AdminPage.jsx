// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import { ConfirmationModal } from '../components/Common/ConfirmationModal.jsx';
import { EditUserModal } from '../components/Modals/EditUserModal.jsx';
import { EditHospitalModal } from '../components/Modals/EditHospitalModal.jsx';
import { EditRecordModal } from '../components/Modals/EditRecordModal.jsx';
import { Button } from '../components/Common/Button.jsx';
import { IconBloodDrop } from '../components/Common/Icons.jsx';
import { mockUsers, mockDonationRecords, indianHospitals as initialHospitals, indianStates, analyticsData } from '../data/mockData.js';


const AdminTab = ({ tabName, title, icon, activeTab, setActiveTab }) => (
    <button 
        onClick={() => setActiveTab(tabName)} 
        className={`flex items-center space-x-3 p-3 rounded-lg transition-all w-full text-left ${activeTab === tabName ? 'bg-red-600 text-white shadow-lg' : 'hover:bg-gray-200 text-gray-700'}`}
    >
        {icon}
        <span className="font-semibold">{title}</span>
    </button>
);

const UserManagementContent = ({ users, setEditingUser, handleRemoveUser }) => (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4">User Management</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Blood Group</th>
                        <th scope="col" className="px-6 py-3">Location</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.bloodGroup}</td>
                            <td className="px-6 py-4">{user.location}</td>
                            <td className="px-6 py-4 space-x-2">
                                <button onClick={() => setEditingUser(user)} className="font-medium text-blue-600 hover:underline">Edit</button>
                                <button onClick={() => handleRemoveUser(user.id)} className="font-medium text-red-600 hover:underline">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const DonationRecordsContent = ({ donationRecords, setEditingRecord, handleRemoveRecord }) => (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4">Donation Records</h3>
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3">Donor</th>
                        <th scope="col" className="px-6 py-3">Recipient</th>
                        <th scope="col" className="px-6 py-3">Hospital</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {donationRecords.map(record => (
                        <tr key={record.id} className="bg-white border-b hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium text-gray-900">{record.donorName}</td>
                            <td className="px-6 py-4">{record.recipientName}</td>
                            <td className="px-6 py-4">{record.hospital}</td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${ record.status === 'Completed' ? 'bg-green-100 text-green-800' : record.status === 'In Transit' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800' }`}>{record.status}</span>
                            </td>
                            <td className="px-6 py-4 space-x-2">
                                <button onClick={() => setEditingRecord(record)} className="font-medium text-blue-600 hover:underline">Edit</button>
                                <button onClick={() => handleRemoveRecord(record.id)} className="font-medium text-red-600 hover:underline">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const HospitalManagementContent = ({ hospitals, handleAddHospital, setEditingHospital, handleRemoveHospital }) => (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4">Manage Hospitals</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
                <h3 className="font-bold mb-2">Add New Hospital</h3>
                <form onSubmit={handleAddHospital} className="space-y-3 bg-gray-50 p-4 rounded-lg border">
                    <input name="name" placeholder="Hospital Name" className="w-full p-2 border rounded-md" required/>
                    <input name="city" placeholder="City" className="w-full p-2 border rounded-md" required/>
                    <select name="state" className="w-full p-2 border rounded-md" required>
                        <option value="">Select State</option>
                        {indianStates.map(state => <option key={state} value={state}>{state}</option>)}
                    </select>
                    <input name="bloodGroups" placeholder="Blood Groups (e.g. A+, O-)" className="w-full p-2 border rounded-md" required/>
                    <Button type="submit">Add Hospital</Button>
                </form>
            </div>
            <div className="max-h-[50vh] overflow-y-auto pr-2">
                <h3 className="font-bold mb-2">Existing Hospitals</h3>
                <div className="space-y-2">
                    {hospitals.map((hospital, index) => (
                        <div key={index} className="bg-white p-3 border rounded-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                            <div>
                                <p className="font-semibold">{hospital.name}</p>
                                <p className="text-sm text-gray-600">{hospital.city}, {hospital.state}</p>
                            </div>
                            <div className="space-x-2 flex-shrink-0">
                                <button onClick={() => setEditingHospital(hospital)} className="font-medium text-blue-600 hover:underline text-sm">Edit</button>
                                <button onClick={() => handleRemoveHospital(hospital.name)} className="font-medium text-red-600 hover:underline text-sm">Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const BroadcastContent = ({ broadcasts, handleSendBroadcast }) => (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4">Broadcast Message</h3>
        <form onSubmit={handleSendBroadcast} className="space-y-4 mb-6">
            <textarea name="broadcast_message" rows="4" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="Type your urgent message here..."></textarea>
            <Button type="submit">Send Broadcast</Button>
        </form>
        <h4 className="font-bold text-lg mb-2">Recent Broadcasts</h4>
        <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
            {broadcasts.length > 0 ? broadcasts.map(b => (
                <div key={b.id} className="bg-red-50 p-3 rounded-lg">
                    <p className="text-gray-800">{b.message}</p>
                    <p className="text-xs text-gray-500 text-right italic">{b.sent}</p>
                </div>
            )) : <p className="text-gray-500">No broadcasts sent yet.</p>}
        </div>
    </div>
);

const AnalyticsContent = () => (
    <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
        <h3 className="text-2xl font-bold mb-4">System Analytics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-center">
            <div className="bg-blue-100 p-4 rounded-lg"><p className="text-3xl font-bold text-blue-800">{analyticsData.totalUsers}</p><p>Total Users</p></div>
            <div className="bg-green-100 p-4 rounded-lg"><p className="text-3xl font-bold text-green-800">{analyticsData.totalDonors}</p><p>Active Donors</p></div>
            <div className="bg-purple-100 p-4 rounded-lg"><p className="text-3xl font-bold text-purple-800">{analyticsData.requestsFulfilled}</p><p>Requests Fulfilled</p></div>
        </div>
        <div>
        <h3 className="font-bold mb-4 text-lg">Blood Supply vs. Demand (Live)</h3>
        <div className="space-y-4">
            {analyticsData.demandVsSupply.map(item => (
                <div key={item.group}>
                    <div className="flex justify-between mb-1">
                        <span className="text-base font-medium text-gray-700">{item.group}</span>
                        <span className="text-sm font-medium text-gray-500">Supply: {item.supply} | Demand: {item.demand}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 relative">
                        <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(item.supply / (item.supply+item.demand)) * 100}%`}}></div>
                        <div className="bg-red-500 h-4 rounded-full absolute top-0" style={{ width: `${(item.demand / (item.supply+item.demand)) * 100}%`, right: '0'}}></div>
                    </div>
                </div>
            ))}
        </div>
        </div>
    </div>
);

export const AdminPage = ({ setPage }) => {
    const [activeTab, setActiveTab] = useState('analytics');
    const [hospitals, setHospitals] = useState(initialHospitals);
    const [users, setUsers] = useState(mockUsers);
    const [donationRecords, setDonationRecords] = useState(mockDonationRecords);
    const [broadcasts, setBroadcasts] = useState([]);
    
    const [editingUser, setEditingUser] = useState(null);
    const [editingHospital, setEditingHospital] = useState(null);
    const [editingRecord, setEditingRecord] = useState(null);
    
    const [confirmation, setConfirmation] = useState({ isOpen: false, message: '', onConfirm: null });

    const closeConfirmation = () => setConfirmation({ isOpen: false });

    const confirmAction = (message, action) => {
        setConfirmation({
            isOpen: true,
            message: message,
            onConfirm: () => {
                action();
                closeConfirmation();
            }
        });
    };

    const handleRemoveUser = (userId) => {
        confirmAction('Are you sure you want to remove this user?', () => {
            setUsers(users.filter(user => user.id !== userId));
        });
    };
    
    const handleSaveUser = (updatedUser) => {
        setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
        setEditingUser(null);
    };

    const handleRemoveRecord = (recordId) => {
        confirmAction('Are you sure you want to remove this donation record?', () => {
            setDonationRecords(donationRecords.filter(record => record.id !== recordId));
        });
    };
    
    const handleSaveRecord = (updatedRecord) => {
        setDonationRecords(donationRecords.map(rec => rec.id === updatedRecord.id ? updatedRecord : rec));
        setEditingRecord(null);
    };

    const handleRemoveHospital = (hospitalName) => {
         confirmAction('Are you sure you want to remove this hospital?', () => {
             setHospitals(hospitals.filter(h => h.name !== hospitalName));
        });
    };

    const handleSaveHospital = (updatedHospital) => {
        setHospitals(hospitals.map(h => (h.name === editingHospital.name) ? updatedHospital : h));
        setEditingHospital(null);
    };
    
    const handleAddHospital = (e) => {
        e.preventDefault();
        const { name, city, state, bloodGroups } = e.target.elements;
        const newHospital = {
            name: name.value,
            city: city.value,
            state: state.value,
            bloodGroups: bloodGroups.value.split(',').map(bg => bg.trim().toUpperCase())
        };
        setHospitals([newHospital, ...hospitals]);
        e.target.reset();
    };

    const handleSendBroadcast = (e) => {
        e.preventDefault();
        const message = e.target.elements.broadcast_message.value;
        if(message.trim()){
            const newBroadcast = {
                id: Date.now(),
                message: message,
                sent: new Date().toLocaleString()
            };
            setBroadcasts([newBroadcast, ...broadcasts]);
            e.target.reset();
        }
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'analytics':
                return <AnalyticsContent />;
            case 'users':
                return <UserManagementContent users={users} setEditingUser={setEditingUser} handleRemoveUser={handleRemoveUser} />;
            case 'donations':
                return <DonationRecordsContent donationRecords={donationRecords} setEditingRecord={setEditingRecord} handleRemoveRecord={handleRemoveRecord} />;
            case 'hospitals':
                return <HospitalManagementContent hospitals={hospitals} handleAddHospital={handleAddHospital} setEditingHospital={setEditingHospital} handleRemoveHospital={handleRemoveHospital} />;
            case 'broadcast':
                return <BroadcastContent broadcasts={broadcasts} handleSendBroadcast={handleSendBroadcast} />;
            default: return null;
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {editingUser && <EditUserModal user={editingUser} onSave={handleSaveUser} onCancel={() => setEditingUser(null)} />}
            {editingHospital && <EditHospitalModal hospital={editingHospital} onSave={handleSaveHospital} onCancel={() => setEditingHospital(null)} />}
            {editingRecord && <EditRecordModal record={editingRecord} onSave={handleSaveRecord} onCancel={() => setEditingRecord(null)} />}
            {confirmation.isOpen && <ConfirmationModal message={confirmation.message} onConfirm={confirmation.onConfirm} onCancel={closeConfirmation} />}

            <header className="bg-white shadow-sm">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <IconBloodDrop className="h-8 w-8 text-red-600" />
                        <h1 className="text-xl font-bold text-gray-800">BloodLink - Admin Panel</h1>
                    </div>
                    <button onClick={() => setPage('home')} className="font-medium text-red-600 hover:text-red-800 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                        Back to Home
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-6 flex flex-col lg:flex-row gap-6">
                <nav className="lg:w-1/4 space-y-2">
                    <AdminTab activeTab={activeTab} setActiveTab={setActiveTab} tabName="analytics" title="System Analytics" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>} />
                    <AdminTab activeTab={activeTab} setActiveTab={setActiveTab} tabName="users" title="User Management" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1-3.72a4 4 0 00-3-3.024M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                    <AdminTab activeTab={activeTab} setActiveTab={setActiveTab} tabName="donations" title="Donation Records" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>} />
                    <AdminTab activeTab={activeTab} setActiveTab={setActiveTab} tabName="hospitals" title="Manage Hospitals" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>} />
                    <AdminTab activeTab={activeTab} setActiveTab={setActiveTab} tabName="broadcast" title="Broadcast Message" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.358 1.84 18.668 1.5 19 1.5v12a3 3 0 11-6 0v-1a1 1 0 00-1-1H7.832a4.001 4.001 0 01-2.396-1.317z" /></svg>} />
                </nav>
                <div className="lg:w-3/4">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};