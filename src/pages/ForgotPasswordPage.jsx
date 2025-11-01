// src/pages/ForgotPasswordPage.jsx
import React from 'react';
import { AuthCard } from '../components/Auth/AuthCard.jsx';
import { Input } from '../components/Auth/Input.jsx';
import { Button } from '../components/Common/Button.jsx';

export const ForgotPasswordPage = ({ setPage }) => {
    // Inline SVG Icons
    const EmailIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>;

    return (
        <AuthCard title="Reset Your Password">
            <form className="space-y-6">
                <p className="text-center text-sm text-gray-500">Enter your email and we'll send you a link to reset your password.</p>
                <Input id="email" type="email" placeholder="Email Address" icon={<EmailIcon />} />
                <Button onClick={() => setPage('login')}>Send Reset Link</Button>
                <p className="text-center text-sm text-gray-500">
                    Remembered your password?{' '}
                    <a href="#" onClick={() => setPage('login')} className="font-medium text-red-600 hover:text-red-500">
                        Sign in
                    </a>
                </p>
            </form>
        </AuthCard>
    );
};