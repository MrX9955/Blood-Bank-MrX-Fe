// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { AuthCard } from '../components/Auth/AuthCard.jsx';
import { Input } from '../components/Auth/Input.jsx';
import { Button } from '../components/Common/Button.jsx';

export const LoginPage = ({ setPage, setLoggedInUser }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const role = email === 'admin@gmail.com' ? 'admin' : 'user';

        try {
            const res = await fetch(`${APIURL}/api/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role }),
            });

            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                setError(data.message || 'Login failed');
                return;
            }

            // Save token to localStorage
            localStorage.setItem('token', data.token);

            // Fetch user profile
            const profileRes = await fetch(`${APIURL}/api/profile`, {
                headers: { Authorization: `Bearer ${data.token}` },
            });
            const user = await profileRes.json();

            setLoggedInUser(user);

            if (role === 'admin') {
                setPage('admin');
            } else {
                setPage('home');
            }
        } catch (err) {
            console.error(err);
            setLoading(false);
            setError('Server error, please try again.');
        }
    };

    // Inline SVG Icons
    const EmailIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
    );

    const PasswordIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
        </svg>
    );

    return (
        <AuthCard title="Welcome Back! Sign In">
            <form className="space-y-6" onSubmit={handleLogin}>
                <Input id="email" type="email" placeholder="Email Address" icon={<EmailIcon />} />
                <Input id="password" type="password" placeholder="Password" icon={<PasswordIcon />} />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <div className="text-right">
                    <a href="#" onClick={() => setPage('forgot_password')} className="text-sm font-medium text-red-600 hover:text-red-500">
                        Forgot Password?
                    </a>
                </div>
                <Button disabled={loading}>{loading ? 'Signing In...' : 'Sign In'}</Button>
                <p className="text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <a href="#" onClick={() => setPage('signup')} className="font-medium text-red-600 hover:text-red-500">
                        Sign up
                    </a>
                </p>
            </form>
        </AuthCard>
    );
};
