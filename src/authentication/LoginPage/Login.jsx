import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    //TODO: Form data storage of the User -
    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        const savedPassword = localStorage.getItem('password');

        if (savedEmail && savedPassword) {
            setEmail(savedEmail);
            setPassword(savedPassword);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        navigate('/');
    }

    //TODO: Social Links -
    const socialLinksData = [
        { id: 1, src: 'https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/', alt: 'Google' },
        { id: 2, src: 'https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/', alt: 'LinkedIn' },
        { id: 3, src: 'https://cdn-icons-png.flaticon.com/128/733/733553.png', alt: 'GitHub' },
    ];


    return (
        <div className="flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 min-h-screen p-8 mt-15">
            <div className="flex justify-center items-center h-full w-full">
                <div className="grid gap-8">
                    <section
                        id="back-div"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl"
                    >
                        <div
                            className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2"
                        >
                            <h1
                                className="text-5xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900"
                            >
                                Log in
                            </h1>
                            <form
                                action="#"
                                method="post"
                                className="space-y-6"
                                onSubmit={handleSubmit}
                                autoComplete="on"
                            >
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-lg dark:text-gray-300"
                                    >
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform duration-300"
                                        type="email"
                                        placeholder="Email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="username"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-lg dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform  duration-300"
                                        type="password"
                                        placeholder="Password"
                                        required
                                        title="Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
                                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                    />
                                </div>

                                <div className="text-right">
                                    <a
                                        href="#"
                                        className="text-blue-400 text-sm transition hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>

                                <button
                                    className="w-full p-3 mt-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg  transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer font-bold"
                                    type="submit"
                                >
                                    LOG IN
                                </button>
                            </form>

                            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                                <p>
                                    Don't have an account? {''}
                                    <Link to="/signup" className="text-blue-400 transition hover:underline"
                                    >Sign Up</Link
                                    >
                                </p>
                            </div>
                            <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
                                {socialLinksData.map((item) => (
                                    <button
                                        className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg cursor-pointer"
                                        key={item.id}
                                    >
                                        <img
                                            className="w-6 h-6"
                                            loading="lazy"
                                            src={item.src}
                                            alt={item.alt}
                                        />
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4 text-center text-sm text-gray-500">
                                <p>
                                    By signing in, you agree to our {''}
                                    <a href="#" className="text-blue-400 transition hover:underline"
                                    >Terms</a
                                    >
                                    {''} and {''}
                                    <a href="#" className="text-blue-400 transition hover:underline"
                                    >Privacy Policy</a
                                    >.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

        </div>
    );
}