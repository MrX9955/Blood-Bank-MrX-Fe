// src/components/Common/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { IconBloodDrop, IconUser, IconChevronDown, IconEdit, IconBell, IconFeedback, IconLogout } from './Icons.jsx';

const Modal = ({ children, title, closeModal }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-800 text-3xl font-light">&times;</button>
            </div>
            {children}
        </div>
    </div>
);

// Helper components for the Modal content (extracted from HomePage)
import { Button } from './Button.jsx';
import { Input } from '../Auth/Input.jsx';

const EditProfileContent = ({ closeModal }) => (
    <form className="space-y-4">
        <Input id="profile_name" type="text" placeholder="Full Name" />
        <Input id="profile_email" type="email" placeholder="Email Address" />
        <Button onClick={closeModal} type="button">Save Changes</Button>
    </form>
);

const NotificationsContent = () => (
    <div className="space-y-3">
        <p className="p-3 bg-red-50 rounded-lg"><strong>Urgent:</strong> O- blood needed at Apollo, Chennai.</p>
        <p className="p-3 bg-green-50 rounded-lg"><strong>Success:</strong> Donation drive collected 50 units today.</p>
        <p className="p-3 bg-blue-50 rounded-lg"><strong>Reminder:</strong> System maintenance scheduled for 2 AM tonight.</p>
    </div>
);

const FeedbackContent = ({ closeModal }) => (
    <form className="space-y-4">
        <div>
            <label htmlFor="feedback_text" className="text-sm font-medium text-gray-700">Your feedback is valuable to us.</label>
            <textarea id="feedback_text" rows="4" className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" placeholder="Tell us what you think..."></textarea>
        </div>
        <Button onClick={closeModal} type="button">Submit Feedback</Button>
    </form>
);


export const Header = ({ user, setPage, setLoggedInUser, setCurrentModal, currentModal, closeModal }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    return (
        <>
            <header className="bg-white shadow-md sticky top-0 z-40">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center space-x-3">
                            <IconBloodDrop className="h-10 w-10 text-red-600" />
                            <span className="text-2xl font-bold text-gray-800">BloodLink</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <nav className="hidden md:flex items-center space-x-6">
                                <a href="#dashboard" className="text-gray-600 hover:text-red-600 font-medium">Dashboard</a>
                                <a href="#finder" className="text-gray-600 hover:text-red-600 font-medium">Find Blood</a>
                                <a href="#drone" className="text-gray-600 hover:text-red-600 font-medium">Drone Delivery</a>
                                {user.email === 'admin@gmail.com' && (
                                    <a href="#" onClick={() => setPage('admin')} className="text-gray-600 hover:text-red-600 font-medium">Admin Panel</a>
                                )}
                            </nav>
                            <div className="relative" ref={dropdownRef}>
                                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500">
                                    <IconUser className="h-8 w-8 text-gray-600 bg-gray-200 rounded-full p-1" />
                                    <span className="hidden sm:inline font-medium text-gray-700">{user.name}</span>
                                    <IconChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {dropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50 animate-fade-in-down">
                                        <div className="px-4 py-2 border-b">
                                            <p className="font-bold text-gray-800">{user.name}</p>
                                            <p className="text-sm text-gray-500 truncate">{user.email}</p>
                                        </div>
                                        <a href="#" onClick={() => { setCurrentModal('edit_profile'); setDropdownOpen(false); }} className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50">
                                            <IconEdit className="h-5 w-5 mr-3" /> Edit Profile
                                        </a>
                                        <a href="#" onClick={() => { setCurrentModal('notifications'); setDropdownOpen(false); }} className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50">
                                            <IconBell className="h-5 w-5 mr-3" /> Notifications
                                        </a>
                                        <a href="#" onClick={() => { setCurrentModal('feedback'); setDropdownOpen(false); }} className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50">
                                            <IconFeedback className="h-5 w-5 mr-3" /> Feedback
                                        </a>
                                        <div className="border-t my-1"></div>
                                        <a href="#" onClick={() => { setLoggedInUser(null); setPage('login'); }} className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50">
                                            <IconLogout className="h-5 w-5 mr-3" /> Logout
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {currentModal === 'edit_profile' && <Modal title="Edit Profile" closeModal={closeModal}><EditProfileContent closeModal={closeModal} /></Modal>}
            {currentModal === 'notifications' && <Modal title="Notifications" closeModal={closeModal}><NotificationsContent /></Modal>}
            {currentModal === 'feedback' && <Modal title="Submit Feedback" closeModal={closeModal}><FeedbackContent closeModal={closeModal} /></Modal>}
        </>
    );
};