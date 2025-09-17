import React from "react";
import Navbar from "../components/Navbar";
import { loginData } from "../project-data/loginData";

export default function Login() {
    return (
        <>
            <Navbar />

            <div className="flex items-center justify-center bg-[#101923] px-4 sm:px-6 lg:px-8 min-h-screen">
                <div className="bg-[#f9dc5c] shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-md mt-24 md:mt-28">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-mono text-center text-gray-800 mb-4">
                        {loginData.heading}
                    </h2>
                    <p className="text-center text-sm md:text-base text-gray-500 mb-8 font-mono">
                        {loginData.subText}
                    </p>

                    {/* Form */}
                    <form className="space-y-6">
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
                                    required
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
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-black-50 font-mono">
                                Remember me
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium font-mono hover:bg-blue-700 transition-colors"
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
                        <a
                            href="/register"
                            className="underline font-medium hover:underline"
                        >
                            Signup
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}