import React, { useState } from 'react'

export default function Help() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 py-10">
            {/* Header */}
            <div className="max-w-2xl text-center mt-10">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Help Desk</h1>
                <p className="text-gray-300 text-base md:text-lg">
                    Need assistance? Fill out the form below and our support team will get back to you within 24–48 hours.
                </p>
            </div>

            {/* Help Form */}
            <form className="w-full max-w-2xl bg-[#1e293b]/80 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-[0_0px_15px_rgba(56,189,248,0.3)] space-y-5 text-white">

                {/* Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-semibold" htmlFor='name'>Full Name</label>
                        <input
                            type="text"
                            id='name'
                            autoComplete='username'
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold" htmlFor='email'>Email Address</label>
                        <input
                            type="email"
                            autoComplete='email'
                            id='email'
                            name='email'
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none"
                        />
                    </div>
                </div>

                {/* Role & User ID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-semibold" htmlFor='role'>User Role</label>
                        <select className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none" id='role' autoComplete='role'>
                            <option>Select Role</option>
                            <option>Student</option>
                            <option>Instructor</option>
                            <option>Admin</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold" htmlFor='userId'>User ID (optional)</label>
                        <input
                            type="text"
                            id='userId'
                            autoComplete='userId'
                            placeholder="Enter user ID"
                            className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none"
                        />
                    </div>
                </div>

                {/* Issue Category */}
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor='category'>Issue Category</label>
                    <select className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none" id='category' autoComplete='category'>
                        <option>Select Category</option>
                        <option>Login / Account Access</option>
                        <option>Course Enrollment</option>
                        <option>Payment / Billing</option>
                        <option>Technical Error</option>
                        <option>Content Issue</option>
                        <option>Feedback / Suggestion</option>
                        <option>Others</option>
                    </select>
                </div>

                {/* Subject */}
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor='subject'>Subject</label>
                    <input
                        type="text"
                        id='subject'
                        autoComplete='subject'
                        placeholder="Write a short title for your issue"
                        className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor='description'>Describe Your Issue</label>
                    <textarea
                        rows="4"
                        id='description'
                        autoComplete='description'
                        placeholder="Describe your issue in detail..."
                        className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none"
                    ></textarea>
                </div>

                {/* File Upload */}
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor='attachFile'>Attach File (optional)</label>
                    <input
                        type="file"
                        id='attachFile'
                        autoComplete='attachFile'
                        className="w-full text-gray-300 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-sky-600 file:text-white hover:file:bg-sky-500"
                    />
                </div>

                {/* Priority & Contact Method */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-2 text-sm font-semibold" htmlFor='priority'>Priority</label>
                        <select className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none" id='priority' autoComplete='priority'>
                            <option>Select Priority</option>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-semibold" htmlFor='response'>Preferred Response Method</label>
                        <select className="w-full px-4 py-2 rounded-lg bg-[#0f172a] text-white focus:ring-2 focus:ring-sky-400 outline-none" id='response' autoComplete='response'>
                            <option>Select Method</option>
                            <option>Email</option>
                            <option>Phone</option>
                            <option>In-App Notification</option>
                        </select>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                    <button
                        type="submit"
                        id='submit'
                        className="px-8 py-3 bg-sky-600 hover:bg-sky-500 rounded-xl text-white font-semibold shadow-lg transition duration-200"
                    >
                        Submit Request
                    </button>
                </div>
            </form>
        </div>
    );
}