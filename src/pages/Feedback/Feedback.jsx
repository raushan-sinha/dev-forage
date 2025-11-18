import React, { useState } from 'react';
import { Send as SendIcon, Email as EmailIcon, AccountCircle as AccountCircleIcon, } from '@mui/icons-material';
import FeedbackSuccess from './FeedbackSuccess';
import Alert from '@mui/material/Alert';

const options = [
    { value: 'general', label: 'General Feedback' },
    { value: 'bug', label: 'Bug Report' },
    { value: 'feature', label: 'Feature Request' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'compliment', label: 'Compliment' },
];

export default function Feedback() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedbackType: 'general',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [countAlert, setCountAlert] = useState(false);
    const access_Key = import.meta.env.VITE_FORM_ACCESS_KEY;

    const WORD_LIMIT = 50;
    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'message') {
            const words = value.trim().split(/\s+/);
            if (value.trim() === '') {
                setFormData(prev => ({
                    ...prev,
                    message: ''
                }));
                setWordCount(0);
                return;
            }

            if (words.length <= WORD_LIMIT) {
                setFormData(prev => ({
                    ...prev,
                    message: value
                }));
                setWordCount(words.length);
            } else {
                setCountAlert(true);
                return;
            }
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    feedbackType: 'general',
                    message: ''
                })
            }, 5000);
        }

        const form_Data = new FormData();
        form_Data.append('name', formData.name);
        form_Data.append('email', formData.email);
        form_Data.append('feedbackType', formData.feedbackType);
        form_Data.append('message', formData.message);
        form_Data.append('access_key', access_Key);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: form_Data
            });
            const result = await response.json();
            if (result.success) {
                setFormResult(`Thank you ${formData.name}, your feedback has been sent successfully.`);
            } else {
                throw new Error("Form submission failed.");
            }
        } catch (error) {
            setFormResult('Network error. Please try again later.');
            console.error(error);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-8 px-4 mt-10 sm:px-6 lg:px-8">
            {isSubmitted ? (
                <FeedbackSuccess />
            ) : (
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-cyan-400 mb-2">Send Feedback</h1>
                        <p className="text-white">We'd love to hear your thoughts and suggestions</p>
                    </div>

                    {/* Feedback Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                    Name
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <AccountCircleIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete='username'
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 font-semibold"
                                        placeholder="Enter your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <EmailIcon className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete='email'
                                        required
                                        className="block w-full pl-10 pr-3 py-3 border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 font-semibold"
                                        placeholder="your.email@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* Feedback Type */}
                            <div>
                                <label htmlFor="feedbackType" className="block text-sm font-bold text-gray-700 mb-2">
                                    Feedback Type
                                </label>
                                <select
                                    id="feedbackType"
                                    name="feedbackType"
                                    autoComplete='feedback-type'
                                    className="block w-full px-3 py-3 border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 bg-white font-semibold"
                                    value={formData.feedbackType}
                                    onChange={handleChange}
                                >
                                    {options.map((option, idx) => (
                                        <option value={option.value} key={idx}>{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Feedback Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                    Feedback Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="6"
                                    autoComplete='off'
                                    className="block w-full px-3 py-3 border-2 border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200 resize-none font-semibold"
                                    placeholder="Share your thoughts with us..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <p className="mt-2 text-sm text-gray-500 font-bold">
                                    {wordCount} / {WORD_LIMIT} words
                                </p>
                                {countAlert && (
                                    <Alert variant="filled" severity="error">
                                        Words limit has been exceeded. Max {WORD_LIMIT} words allowed.
                                    </Alert>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                <SendIcon className="w-5 h-5" />
                                <span>Send Feedback</span>
                            </button>
                        </form>
                    </div>

                    {/* Footer Note */}
                    <p className="text-center text-sm text-white mt-6">
                        Your feedback helps us improve our services and better serve you.
                    </p>
                </div>
            )}
        </div>
    );
}