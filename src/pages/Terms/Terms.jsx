// DevForageTerms.jsx
import React from "react";
import Footer from "../../components/Footer/Footer";

const termsData = [
    {
        title: "Introduction",
        content: [
            "Welcome to DevForage — a developer-focused learning platform where individuals can explore coding roadmaps, share knowledge, and create reusable React components.",
            "By accessing or using DevForage, you agree to comply with these Terms and Conditions, which govern your use of our platform, services, and content.",
            "Please read these terms carefully before using DevForage."
        ],
    },
    {
        title: "Eligibility",
        content: [
            "DevForage is open to all individuals aged 13 years or older interested in web development, programming, or related fields.",
            "Users under 18 must have parental or guardian consent to use the platform.",
            "You must register with a valid email address to access certain features like course enrollment, posting, or creating components."
        ],
    },
    {
        title: "User Responsibilities",
        content: [
            "You agree to use DevForage responsibly and ethically.",
            "Do not upload, post, or share any material that is illegal, harmful, or violates intellectual property rights.",
            "Users are expected to maintain professional and respectful communication in community discussions and comments.",
            "You are responsible for maintaining the confidentiality of your account credentials and all activities that occur under your account."
        ],
    },
    {
        title: "Content Ownership",
        content: [
            "All learning materials, posts, roadmaps, and React components uploaded by users remain their intellectual property.",
            "By sharing content on DevForage, you grant us a non-exclusive, royalty-free license to display, promote, or feature your content for educational or community purposes.",
            "DevForage retains the right to remove content that violates our guidelines or legal standards."
        ],
    },
    {
        title: "Learning & Community Features",
        content: [
            "DevForage allows users to explore structured coding roadmaps, tutorials, and learning materials created by experts or community members.",
            "You can publish your own articles, coding resources, or reusable React components to help others in the community.",
            "All shared materials should be original or properly credited to their sources."
        ],
    },
    {
        title: "Prohibited Activities",
        content: [
            "Misusing the platform for spam, advertisements, or malicious software distribution is strictly prohibited.",
            "Copying or redistributing paid or premium content without authorization will result in immediate account suspension.",
            "Users must not attempt to bypass security systems, misuse APIs, or exploit vulnerabilities in DevForage."
        ],
    },
    {
        title: "Privacy & Data Usage",
        content: [
            "DevForage values your privacy. Personal information is collected only to provide and improve our services.",
            "We may use your data to personalize your experience, send educational updates, or notify you of platform changes.",
            "Your information will never be sold or shared with third parties without consent, except as required by law."
        ],
    },
    {
        title: "Intellectual Property",
        content: [
            "All platform design, logos, trademarks, and original content are the property of DevForage.",
            "Users may not copy, modify, or distribute platform assets without written permission.",
            "Any unauthorized use of DevForage branding or materials will be subject to legal action."
        ],
    },
    {
        title: "Account Suspension & Termination",
        content: [
            "DevForage reserves the right to suspend or terminate user accounts that violate these Terms or harm the platform’s integrity.",
            "Repeated infringement of intellectual property rights, spreading misinformation, or engaging in harassment will lead to permanent bans.",
            "Users may request account deletion by contacting DevForage support."
        ],
    },
    {
        title: "Platform Updates & Modifications",
        content: [
            "DevForage may update features, tools, or terms periodically to improve the platform experience.",
            "Continued use of DevForage after updates constitutes acceptance of the revised terms.",
            "Major policy changes will be communicated via email or platform notifications."
        ],
    },
    {
        title: "Limitation of Liability",
        content: [
            "DevForage is provided 'as is' without warranties of any kind.",
            "We are not responsible for any loss of data, revenue, or damage resulting from the use or inability to use our platform.",
            "Users are solely responsible for their activities, content, and interactions on the platform."
        ],
    },
    {
        title: "Governing Law",
        content: [
            "These Terms and Conditions are governed by the laws applicable in the jurisdiction where DevForage operates.",
            "Any disputes arising from these terms will be handled under the exclusive jurisdiction of the relevant courts."
        ],
    },
];

export default function Terms() {
    return (
        <>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen p-6 md:p-12 mt-10">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-300 mb-8 text-center">
                        DevForage Contest Terms & Conditions
                    </h1>

                    <p className="text-md md:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
                        Welcome to DevForage! Before participating in any contests hosted on our platform, please read these terms and conditions carefully. By entering a contest, you agree to abide by these rules.
                    </p>

                    <div className="grid gap-6 md:gap-8">
                        {termsData.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-[#101923] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <h2 className="text-xl md:text-2xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
                                    {idx + 1}. {item.title}
                                </h2>
                                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                                    {item.content.map((line, index) => (
                                        <li key={index}>{line}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};