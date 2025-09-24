import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginData } from "./loginData";
import Alert from '@mui/material/Alert';

export default function Login() {
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        const savedRemember = localStorage.getItem('dev_remember') === 'true';
        const savedEmail = localStorage.getItem('dev_email') || '';
        const savedPassword = localStorage.getItem('dev_password') || '';

        if (savedRemember) {
            setRemember(true);
            setEmail(savedEmail);
            setPassword(savedPassword);
        }
    }, []);

    //TODO: Login Form logic -
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields.');
            return;
        }

        //? login call goes here
        if (remember) {
            localStorage.setItem("dev_remember", "true");
            localStorage.setItem("dev_email", email);
            localStorage.setItem("dev_password", password);
        } else {
            localStorage.removeItem("dev_remember");
            localStorage.removeItem("dev_email");
            localStorage.removeItem("dev_password");
        }
        navigate('/');
    };

    return (
        <>
            <div className="flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 min-h-screen p-10">
                <div className="bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md mt-24 md:mt-28 text-white">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-3xl font-bold text-center text-white-800 mb-6">
                        {loginData.heading}
                    </h2>

                    {error && (
                        <Alert severity="warning" onClose={() => setError('')}>
                            {error}
                        </Alert>
                    )}
                    <br />
                    {/* Form */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {loginData.fields.map((field) => (
                            <div key={field.id}>
                                <label
                                    htmlFor={field.id}
                                    className="block text-sm font-mono text-black-50 mb-1"
                                >
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    autoComplete={
                                        field.id === "email"
                                            ? "email"
                                            : field.id === "password"
                                                ? "current-password"
                                                : "on"
                                    }
                                    className="w-full px-4 py-3 text-black-50 border border-black-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono"
                                    value={
                                        field.id === "email"
                                            ? email
                                            : field.id === "password"
                                                ? password
                                                : undefined
                                    }
                                    onChange={(e) => {
                                        if (field.id === "email") setEmail(e.target.value);
                                        if (field.id === "password") setPassword(e.target.value);
                                    }}
                                />
                                {field.id === "password" && (
                                    <div className="flex justify-end mt-2">
                                        <a
                                            href="/forgot-password"
                                            className="text-sm text-black-50 hover:underline font-mono"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Remember Me */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                name="remember"
                                autoComplete="on"
                                className="h-4 w-4 text-blue-500 rounded border-gray-300"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-black-50 font-mono">
                                Remember me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium font-mono hover:bg-blue-700 transition-colors cursor-pointer"
                        >
                            Login
                        </button>
                    </form>

                    {/* Social Login */}
                    <div className="my-8 flex items-center justify-center">
                        <span className="w-1/5 border-b border-black-300"></span>
                        <span className="text-xs text-black-50 mx-3 font-mono">OR</span>
                        <span className="w-1/5 border-b border-black-300"></span>
                    </div>
                    <div className="flex space-x-5 justify-center">
                        {loginData.socials.map((social) => (
                            <button
                                key={social.id}
                                className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
                            >
                                <img src={social.img} alt={social.alt} className="w-6 h-6" />
                            </button>
                        ))}
                    </div>

                    {/* Register Link */}
                    <p className="mt-8 text-center text-sm text-black-50 font-mono">
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="underline font-medium hover:underline"
                        >
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}