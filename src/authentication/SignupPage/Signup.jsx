import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const fieldValidators = {
        fullName: (value) => value.trim() ? "" : "Enter valid Full Name",
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address",
        password: (value) =>
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
                ? ""
                : "Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
        confirmPassword: (value, state) =>
            value === state.password ? "" : "Passwords do not match"
    };

    const handleChange = (field, value) => {
        if (field === "fullName") setFullName(value);
        if (field === "email") setEmail(value);
        if (field === "password") setPassword(value);
        if (field === "confirmPassword") setConfirmPassword(value);

        setErrors(prev => {
            const newErrors = { ...prev };
            const error = fieldValidators[field](value, { password });
            if (error) newErrors[field] = error;
            else delete newErrors[field];

            if (field === "password" && confirmPassword) {
                const confirmError = fieldValidators.confirmPassword(confirmPassword, { password: value });
                if (confirmError) newErrors.confirmPassword = confirmError;
                else delete newErrors.confirmPassword;
            }

            return newErrors;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const allErrors = {
            fullName: fieldValidators.fullName(fullName),
            email: fieldValidators.email(email),
            password: fieldValidators.password(password),
            confirmPassword: fieldValidators.confirmPassword(confirmPassword, { password })
        };

        const hasErrors = Object.values(allErrors).some(Boolean);
        setErrors(allErrors);

        if (hasErrors) return;

        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);

        navigate("/");
    };

    return (
        <div className="flex items-center justify-center bg-[#101923] px-4 p-6 sm:px-6 lg:px-8 min-h-screen mt-12">
            <div className="bg-[#e6f5fa] shadow-lg rounded-2xl p-8 w-full max-w-md mt-10">
                <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                    Signup
                </h2>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                            Full Name
                        </label>

                        <input type="text" id="name" placeholder="John Doe" autoComplete="name" value={fullName} className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-sky-500 focus:border-sky-500" onChange={(e) => handleChange("fullName", e.target.value)} />

                        {errors.fullName &&
                            <p className="text-red-600 text-sm">
                                {errors.fullName}
                            </p>
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>

                        <input type="email" id="email" placeholder="john.doe@example.com" autoComplete="email" value={email} className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-sky-500 focus:border-sky-500" onChange={(e) => handleChange("email", e.target.value)} />

                        {errors.email &&
                            <p className="text-red-600 text-sm">
                                {errors.email}
                            </p>
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>

                        <input type="password" id="password" placeholder="********" autoComplete="new-password" value={password} className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-sky-500 focus:border-sky-500" onChange={(e) => handleChange("password", e.target.value)} />

                        {errors.password &&
                            <p className="text-red-600 text-sm">
                                {errors.password}
                            </p>
                        }
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>

                        <input type="password" id="confirmPassword" placeholder="********" value={confirmPassword} className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-sky-500 focus:border-sky-500" autoComplete="new-password" onChange={(e) => handleChange("confirmPassword", e.target.value)} />

                        {errors.confirmPassword &&
                            <p className="text-red-600 text-sm">
                                {errors.confirmPassword}
                            </p>
                        }
                    </div>

                    <button type="submit" className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer">
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-sky-600 font-medium hover:underline">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
}