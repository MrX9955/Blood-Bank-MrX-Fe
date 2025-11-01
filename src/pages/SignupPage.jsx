// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { AuthCard } from '../components/Auth/AuthCard.jsx';
import { Input } from '../components/Auth/Input.jsx';
import { Button } from '../components/Common/Button.jsx';
const APIURL = "https://bloodbank-backend-six.vercel.app"
// const APIURL = "https://localhost:5000"

export const SignupPage = ({ setPage }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const confirmPassword = e.target.elements['confirm-password'].value;

        if (password !== confirmPassword) {
            setError("Passwords don't match");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${APIURL}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password, role: 'user' }),
            });

            const data = await res.json();
            setLoading(false);

            if (!res.ok) {
                setError(data.message || 'Registration failed');
                return;
            }

            setSuccess('Account created successfully! You can now sign in.');
            setTimeout(() => setPage('login'), 1500);
        } catch (err) {
            console.error(err);
            setError('Server error, please try again.');
            setLoading(false);
        }
    };

    // Inline SVG Icons
    const UserIcon = (props) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
    );
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
        <AuthCard title="Create Your Account">
            <form className="space-y-4" onSubmit={handleSignup}>
                <Input id="name" type="text" placeholder="Full Name" icon={<UserIcon />} />
                <Input id="email" type="email" placeholder="Email Address" icon={<EmailIcon />} />
                <Input id="password" type="password" placeholder="Password" icon={<PasswordIcon />} />
                <Input id="confirm-password" type="password" placeholder="Confirm Password" icon={<PasswordIcon />} />
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <div className="pt-2">
                    <Button disabled={loading}>{loading ? 'Creating Account...' : 'Create Account'}</Button>
                </div>
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <a href="#" onClick={() => setPage('login')} className="font-medium text-red-600 hover:text-red-500">
                        Sign in
                    </a>
                </p>
            </form>
        </AuthCard>
    );
};
