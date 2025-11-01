


// src/main.jsx
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// Import Pages
import { LoginPage } from './pages/LoginPage.jsx';
import { SignupPage } from './pages/SignupPage.jsx';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AdminPage } from './pages/AdminPage.jsx';
const APIURL = "https://bloodbank-backend-six.vercel.app/"
// const APIURL = "https://localhost:5000"

function App() {
    const [page, setPage] = useState('login');
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // 🔹 Auto-login if token exists
    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(`${APIURL}api/profile`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (res.ok) {
                    const user = await res.json();
                    setLoggedInUser(user);
                    if (user.role === 'admin' || user.email === 'admin@gmail.com') {
                        setPage('admin');
                    } else {
                        setPage('home');
                    }
                } else {
                    localStorage.removeItem('token');
                    setLoggedInUser(null);
                    setPage('login');
                }
            } catch (err) {
                console.error('Auto-login error:', err);
                localStorage.removeItem('token');
            } finally {
                setLoading(false);
            }
        };

        checkToken();
    }, []);

    const renderPage = () => {
        if (loading) {
            return (
                <div className="flex items-center justify-center h-screen text-lg text-gray-600">
                    Checking session...
                </div>
            );
        }

        if (loggedInUser) {
            switch (page) {
                case 'home':
                    return <HomePage user={loggedInUser} setPage={setPage} setLoggedInUser={setLoggedInUser} />;
                case 'admin':
                    if (loggedInUser.email === 'admin@gmail.com' || loggedInUser.role === 'admin') {
                        return <AdminPage setPage={setPage} />;
                    }
                    return <HomePage user={loggedInUser} setPage={setPage} setLoggedInUser={setLoggedInUser} />;
                default:
                    return <HomePage user={loggedInUser} setPage={setPage} setLoggedInUser={setLoggedInUser} />;
            }
        }

        switch (page) {
            case 'login':
                return <LoginPage setPage={setPage} setLoggedInUser={setLoggedInUser} />;
            case 'signup':
                return <SignupPage setPage={setPage} />;
            case 'forgot_password':
                return <ForgotPasswordPage setPage={setPage} />;
            default:
                return <LoginPage setPage={setPage} setLoggedInUser={setLoggedInUser} />;
        }
    };

    return <React.Fragment>{renderPage()}</React.Fragment>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
