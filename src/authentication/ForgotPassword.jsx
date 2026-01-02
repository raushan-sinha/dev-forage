import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const emailRef = useRef(null);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);


    //TODO: Auto focus on Email field when page loads -
    useEffect(() => {
        emailRef.current.focus();
    }, []);

    //TODO: Logic for Handle the form -
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setSuccess(true);
            setLoading(false);
            console.log('Forgot Password Form Submitted');
        }, 1500);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-5">
            <div className="w-full max-w-md bg-gray-900/70 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 shadow-2xl mt-20">

                {/* Heading */}
                <h1 className="text-3xl font-bold text-white text-center mb-2">
                    Forgot Password
                </h1>
                <p className="text-gray-400 text-center mb-6">
                    Enter your email and we’ll send you a reset link.
                </p>

                {/* Form (UI only) */}
                {!success ? (
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm text-gray-300 mb-1" htmlFor='email'>
                                Email address
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                autoComplete='on'
                                id='email'
                                name='email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                ref={emailRef}
                                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:scale-[1.02] transition"
                        >
                            {loading ? 'Sending Link...' : 'Send Reset Link'}
                        </button>
                    </form>
                ) : (
                    <div className="text-center space-y-3">
                        <p className="text-green-400 font-medium">
                            {` Reset link on "${email}" sent successfully 🚀`}
                        </p>
                        <p className="text-gray-400 text-sm">
                            Please check your inbox (and spam folder).
                        </p>
                    </div>
                )}

                {/* Footer */}
                <div className="mt-6 text-center">
                    <Link
                        to="/login"
                        className="text-sm text-cyan-400 hover:underline"
                    >
                        Back to login
                    </Link>
                </div>

                <p className="mt-4 text-xs text-gray-500 text-center">
                    🔒 Secure & encrypted password recovery
                </p>
            </div>
        </div>
    )
}

export default ForgotPassword;