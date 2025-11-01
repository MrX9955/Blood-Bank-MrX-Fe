// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Header } from '../components/Common/Header.jsx';
import { DashboardFrame } from '../components/Common/DashboardFrame.jsx';
import { LocationFinder } from '../components/Sections/LocationFinder.jsx';
import { DroneDeliverySection } from '../components/Sections/DroneDeliverySection.jsx';
import { IconBloodDrop, IconUser } from '../components/Common/Icons.jsx';
import { mockRequests, mockDonors, mockChats, mockTasks } from '../data/mockData.js';


export const HomePage = ({ user, setPage, setLoggedInUser }) => {
    const [currentModal, setCurrentModal] = useState(null);

    const closeModal = () => setCurrentModal(null);
    
    // The Modal component is defined in Header.jsx now, and its content is handled via setCurrentModal

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header user={user} setPage={setPage} setLoggedInUser={setLoggedInUser} setCurrentModal={setCurrentModal} currentModal={currentModal} closeModal={closeModal} />
            <main>
                {user.email === 'admin@gmail.com' && (
                    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 container mx-auto my-4 rounded-r-lg shadow-md" role="alert">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-bold">Admin View</p>
                                <p>You are currently viewing the user dashboard.</p>
                            </div>
                            <a href="#" onClick={() => setPage('admin')} className="font-bold underline bg-yellow-200 px-3 py-1 rounded-md hover:bg-yellow-300">Return to Admin Panel</a>
                        </div>
                    </div>
                )}
                <div id="dashboard" className="container mx-auto p-4 sm:p-6 lg:p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Welcome back, {user.name.split(' ')[0]}!</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <DashboardFrame title="Recent Requests" icon={<IconBloodDrop className="w-7 h-7 text-red-500"/>}>
                            {mockRequests.map((req, i) => (
                                <div key={i} className="p-3 bg-red-50 rounded-lg">
                                    <p className="font-semibold">{req.name} <span className="text-red-700 font-bold">({req.blood})</span></p>
                                    <p className="text-sm text-gray-500">{req.location} - <span className="italic">{req.time}</span></p>
                                </div>
                            ))}
                        </DashboardFrame>
                        <DashboardFrame title="Recent Donors" icon={<IconUser className="w-7 h-7 text-green-500"/>}>
                            {mockDonors.map((donor, i) => (
                                <div key={i} className="p-3 bg-green-50 rounded-lg">
                                    <p className="font-semibold">{donor.name} <span className="text-green-700 font-bold">({donor.blood})</span></p>
                                    <p className="text-sm text-gray-500">{donor.location} - <span className="italic">{donor.time}</span></p>
                                </div>
                            ))}
                        </DashboardFrame>
                        <DashboardFrame title="Recent Chats" icon={<svg className="w-7 h-7 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm5.293-1.707a1 1 0 011.414 0L10 9.586l1.293-1.293a1 1 0 111.414 1.414L11.414 11l1.293 1.293a1 1 0 01-1.414 1.414L10 12.414l-1.293 1.293a1 1 0 01-1.414-1.414L8.586 11 7.293 9.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>}>
                             {mockChats.map((chat, i) => (
                                <div key={i} className="p-3 bg-blue-50 rounded-lg">
                                    <p className="font-semibold">{chat.name}</p>
                                    <p className="text-sm text-gray-600 truncate">"{chat.message}" - <span className="italic">{chat.time}</span></p>
                                </div>
                            ))}
                        </DashboardFrame>
                        <DashboardFrame title="Health Tasks" icon={<svg className="w-7 h-7 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13.25a.75.75 0 00-1.5 0v4.59L7.3 10.7a.75.75 0 00-1.1 1.02l2.5 3a.75.75 0 001.1 0l4-6a.75.75 0 10-1.2-.8l-3.35 5.025V4.75z" clipRule="evenodd" /></svg>}>
                            {mockTasks.map((item, i) => (
                                <div key={i} className="p-3 bg-yellow-50 rounded-lg flex justify-between items-center">
                                    <p className="font-medium text-gray-700">{item.task}</p>
                                    <span className="text-xs font-bold bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">{item.due}</span>
                                </div>
                            ))}
                        </DashboardFrame>
                    </div>
                </div>
                <LocationFinder />
                <DroneDeliverySection />
            </main>
            
            <footer className="bg-gray-900 text-white">
                <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; {new Date().getFullYear()} BloodLink. All Rights Reserved.</p>
                    <p className="text-sm text-gray-400 mt-2">Saving lives, one drop at a time.</p>
                </div>
            </footer>
        </div>
    );
};