import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { googleAuth, googleProvider } from "../../utils/GoogleFirebase";
// import { githubAuth, githubProvider } from "../../utils/GithubFirebase";
import { signInWithPopup } from "firebase/auth";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser({ email, password });

            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', data.token);

            navigate('/');
        } catch (error) {
            console.error("Login failed:", error);
            alert("Invalid email or password");
        }
    }

    // const socialLinksData = [
    //     { id: 1, src: 'https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/', alt: 'Google' },
    //     { id: 2, src: 'https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/', alt: 'LinkedIn' },
    //     { id: 3, src: 'https://cdn-icons-png.flaticon.com/128/733/733553.png', alt: 'GitHub' },
    // ];

    const handleGoogleLogin = async () => {
        try {
            const response = await signInWithPopup(googleAuth, googleProvider);
            const user = response.user;

            const res = await fetch("http://localhost:5000/api/social-auth/google-login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: user.displayName,
                    email: user.email,
                    avatar: user.photoURL,
                    providerId: user.uid
                })
            });

            if (!res.ok) {
                throw new Error("Google login failed");
            }

            const data = await res.json();

            localStorage.setItem("user", JSON.stringify(data.user));

            navigate("/");
        } catch (error) {
            console.error("Google login error:", error);
        }
    };

    const handleLinkedInLogin = async () => {
        const params = new URLSearchParams({
            response_type: "code",
            client_id: import.meta.env.VITE_LINKEDIN_CLIENT_ID,
            redirect_uri: "http://localhost:5000/api/social-auth/callback",
            scope: "openid email profile"
        });

        window.location.href = `https://www.linkedin.com/oauth/v2/authorization?${params}`;
    };

    // const handleGithubLogin = async () => {
    //     try {
    //         const response = await signInWithPopup(githubAuth, githubProvider);
    //         const user = response.user;
    //         const res = await fetch("http://localhost:5000/api/social-auth/linkedin-login", {
    //             method: "POST",
    //             credentials: "include",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 name: user.displayName,
    //                 email: user.email,
    //                 avatar: user.photoURL,
    //                 providerId: user.uid
    //             })
    //         });

    //         const responseData = await res.json();

    //         if (!responseData.ok) {
    //             alert(responseData.message);
    //         }

    //         navigate("/");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    return (
        <div className="flex items-center justify-center bg-gray-900 px-4 sm:px-6 lg:px-8 min-h-screen p-8">
            <div className="flex justify-center items-center h-full w-full">
                <div className="grid gap-8">
                    <section id="back-div" className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl">
                        <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-8 m-2">
                            <h1 className="text-4xl font-bold text-center cursor-default dark:text-gray-300 text-gray-900">
                                Log in
                            </h1>

                            <form action="#" method="post" className="space-y-6 mt-5" onSubmit={handleSubmit} autoComplete="on">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-lg dark:text-gray-300">
                                        Email
                                    </label>

                                    <input id="email" name="email" className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform duration-300" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block mb-2 text-lg dark:text-gray-300">
                                        Password
                                    </label>

                                    <input id="password" name="password" className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform  duration-300" type="password" placeholder="Password" required title="Password must be at least 8 characters and include uppercase, lowercase, number, and special character" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                                </div>

                                <div className="text-right">
                                    <a href="#" className="text-blue-400 text-sm transition hover:underline">
                                        Forgot your password?
                                    </a>
                                </div>

                                <button className="w-full p-3 mt-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg  transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer font-bold" type="submit">
                                    LOG IN
                                </button>
                            </form>

                            <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                                Don't have an account? {''}

                                <Link to="/signup" className="text-blue-400 transition hover:underline">
                                    Sign Up
                                </Link>
                            </div>

                            {/* <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
                                {socialLinksData.map((item) => (
                                    <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg cursor-pointer" key={item.id}>
                                        <img className="w-6 h-6" loading="lazy" src={item.src} alt={item.alt} />
                                    </button>
                                ))}
                            </div> */}

                            <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-6 h-6"
                                        src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                                        alt="Google"
                                    />
                                </button>

                                <button
                                    onClick={handleLinkedInLogin}
                                    className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-6 h-6"
                                        src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                                        alt="LinkedIn"
                                    />
                                </button>

                                {/* <button
                                    onClick={handleGithubLogin}
                                    className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg cursor-pointer"
                                >
                                    <img
                                        className="w-6 h-6"
                                        src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
                                        alt="Github"
                                    />
                                </button> */}
                            </div>

                            <div className="mt-4 text-center text-sm text-gray-500">
                                By signing in, you agree to our {''}
                                <Link to="/terms" className="text-blue-400 transition hover:underline">
                                    Terms
                                </Link>

                                {''} and {''}

                                <Link to="/privacyPolicy" className="text-blue-400 transition hover:underline">
                                    Privacy Policy
                                </Link>.
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}