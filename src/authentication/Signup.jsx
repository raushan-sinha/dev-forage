import React from "react";
import { signupData } from "../project-data/signupData";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Signup() {
    return (
        <>
            <Navbar />

            <div className="flex items-center justify-center bg-[#101923] px-4 sm:px-6 lg:px-8 min-h-screen mt-12">
                <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-2">
                        {signupData.heading}
                    </h2>
                    <p className="text-sm text-gray-600 text-center mb-6">
                        {signupData.subHeading}
                    </p>

                    <form className="space-y-4">
                        {signupData.fields.map((field) => (
                            <div key={field.id}>
                                <label
                                    htmlFor={field.id}
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    placeholder={field.placeholder}
                                    autoComplete={field.autocomplete}
                                    required
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                />
                            </div>
                        ))}

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-sky-500"
                        >
                            {signupData.buttonText}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        {signupData.footerText}{" "}
                        <Link to={signupData.footerLink} className="text-sky-600 font-medium hover:underline">
                            {signupData.footerLinkText}
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}