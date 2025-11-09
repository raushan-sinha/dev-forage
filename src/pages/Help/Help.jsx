import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer';
import { InputField, TextareaField, FileUpload, SelectField, SubmitBtn } from '../../components/FormField';

const userRoleOpts = ['Select Role', 'Student', 'Instructor', 'Admin'];

const issueCategoryOpts = ['Select Category', 'Login / Account Access', 'Course Enrollment', 'Payment / Billing', 'Technical Error', 'Content Issue', 'Feedback / Suggestion', 'Others'];

const priorityOpts = ['Select Priority', 'Low', 'Medium', 'High'];

const responseMethodOpts = ['Select Method', 'Email', 'Phone', 'In-App Notification'];

export default function Help() {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-4 py-10">
                <div className="max-w-2xl text-center mt-10 py-3">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Help Desk</h1>
                    <p className="text-gray-300 text-base md:text-lg">
                        Need assistance? Fill out the form below and our support team will get back to you within 24–48 hours.
                    </p>
                </div>
                <form className="w-full max-w-2xl bg-[#1e293b]/80 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-[0_0px_15px_rgba(56,189,248,0.3)] space-y-5 text-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <InputField
                                label='Full Name'
                                id='name'
                                type='text'
                                name='name'
                                autoComplete='username'
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <InputField
                                label='Email'
                                id='email'
                                type='email'
                                name='email'
                                autoComplete='email'
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <SelectField
                                label='User Role'
                                id='role'
                                autoComplete='role'
                                options={userRoleOpts}
                            />
                        </div>
                        <div>
                            <InputField
                                label='User ID (optional)'
                                id='userId'
                                type='text'
                                name='userId'
                                autoComplete='userId'
                                placeholder="User ID"
                            />
                        </div>
                    </div>

                    <div>
                        <SelectField
                            label='Issue Category'
                            id='category'
                            autoComplete='category'
                            options={issueCategoryOpts}
                        />
                    </div>
                    <div>
                        <InputField
                            label='Subject'
                            id='subject'
                            type='text'
                            name='subject'
                            autoComplete='subject'
                            placeholder="Write a short title for your issue"
                        />
                    </div>

                    <div>
                        <TextareaField
                            label='Describe Your Issue'
                            rows="4"
                            id='description'
                            autoComplete='description'
                            placeholder="Describe your issue in detail..."
                        />
                    </div>

                    <div>
                        <FileUpload
                            label='Choose File'
                            type="file"
                            id='attachFile'
                            autoComplete='attachFile'
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <SelectField
                                label='Priority'
                                id='priority'
                                autoComplete='priority'
                                options={priorityOpts}
                            />
                        </div>
                        <div>
                            <SelectField
                                label='Preferred Response Method'
                                id='response'
                                autoComplete='response'
                                options={responseMethodOpts}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <SubmitBtn
                            type="submit"
                            id='submit'
                            btnName='Submit Request'
                        />
                    </div>
                </form>
            </div>

            <Footer />
        </>
    );
}