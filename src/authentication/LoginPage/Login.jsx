import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginData } from "./loginData";

export default function Login() {
    const [remember, setRemember] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedRemember = localStorage.getItem("remember") === "true";
        const savedEmail = localStorage.getItem("email") || "";

        if (savedRemember && savedEmail) {
            setRemember(true);
            setEmail(savedEmail);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (remember) {
            localStorage.setItem("remember", "true");
            localStorage.setItem("email", email);
        } else {
            localStorage.removeItem("remember");
            localStorage.removeItem("email");
        }

        navigate('/');
    };

    return (
        <div className="flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 min-h-screen">
            <div className="bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md mt-24 md:mt-28 text-white">
                <h2 className="text-3xl font-bold text-center mb-6">
                    Login
                </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="block text-sm font-mono text-black-50 mb-1">
                        Email
                    </label>

                    <input type="email" id="email" placeholder="you@example.com" autoComplete="email" onChange={(e) => setEmail(e.target.value)} value={email} required className="w-full px-4 py-3 text-black-50 border border-black-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono" />

                    <label htmlFor="password" className="block text-sm font-mono text-black-50 mb-1">
                        Password
                    </label>

                    <input type="password" id="password" placeholder="••••••••" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} value={password} required title="Password must be at least 8 characters and include uppercase, lowercase, number, and special character" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" className="w-full px-4 py-3 text-black-50 border border-black-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono" />

                    <div className="flex items-center">
                        <input type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 text-blue-500 rounded border-gray-300 cursor-pointer" />

                        <label htmlFor="remember" className="ml-2 text-sm text-black-50 font-mono cursor-pointer">
                            Remember me
                        </label>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium font-mono hover:bg-blue-700 transition-colors cursor-pointer">
                        Login
                    </button>
                </form>

                <div className="my-8 flex items-center justify-center">
                    <span className="w-1/5 border-b border-black-300"></span>
                    <span className="text-xs text-black-50 mx-3 font-mono">OR</span>
                    <span className="w-1/5 border-b border-black-300"></span>
                </div>

                <div className="flex space-x-5 justify-center">
                    {loginData.socials.map((social) => (
                        <button key={social.id} className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition cursor-pointer">
                            <img src={social.img} alt={social.alt} className="w-6 h-6" />
                        </button>
                    ))}
                </div>

                <p className="mt-8 text-center text-sm text-black-50 font-mono">
                    Don’t have an account? {" "}
                    <Link to="/signup" className="underline font-medium hover:underline">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
}