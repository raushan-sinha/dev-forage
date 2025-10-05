import React from 'react'
import Footer from '../../components/Footer/Footer';

export default function PrivacyPolicy() {
    //todo: Month & Year -
    const date = new Date();
    const monthName = date.toLocaleString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });

    return (
        <>
            <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen py-12 px-6 md:px-16 mt-10">
                <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
                        Privacy Policy – DevForage
                    </h1>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-8">
                        Last Updated: {monthName}
                    </p>

                    <section className="space-y-6">
                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                1. Information We Collect
                            </h2>
                            <p>
                                We collect information such as your name, email, and activity data
                                to enhance your learning experience. Technical data like IP
                                address, browser type, and cookies are also gathered for analytics
                                and security.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                2. How We Use Your Information
                            </h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>To provide access to learning materials and recommendations.</li>
                                <li>To improve user experience and platform performance.</li>
                                <li>To communicate updates and announcements.</li>
                                <li>To ensure account security and prevent unauthorized access.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                3. Data Security
                            </h2>
                            <p>
                                We employ strong encryption, secure servers, and authentication
                                systems to protect your data. However, no digital system is 100%
                                secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                4. Sharing of Information
                            </h2>
                            <p>
                                We do not sell or rent your data. Information may be shared only
                                with trusted service providers or as required by law.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                5. Cookies and Tracking
                            </h2>
                            <p>
                                Cookies help us maintain your session and analyze traffic. You can
                                disable cookies in your browser, but some features may not work
                                properly.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                6. Your Rights
                            </h2>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Access or delete your personal information.</li>
                                <li>Request a copy of your stored data.</li>
                                <li>Opt out of marketing messages anytime.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                7. Third-Party Links
                            </h2>
                            <p>
                                DevForage may link to other websites. We are not responsible for
                                their privacy policies or content.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                8. Policy Updates
                            </h2>
                            <p>
                                This Privacy Policy may be updated periodically. Any changes will
                                be reflected on this page with a new effective date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-300 mb-2">
                                9. Contact Us
                            </h2>
                            <p>
                                For questions or concerns, reach us at{" "}
                                <a
                                    href="mailto:privacy@devforage.com"
                                    className="text-blue-500 underline"
                                >
                                    privacy@devforage.com
                                </a>
                                .
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            <Footer />
        </>
    );
}