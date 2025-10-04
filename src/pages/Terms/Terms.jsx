// DevForageTerms.jsx
import React from "react";
import Footer from "../../components/Footer/Footer";

const termsData = [
    {
        title: "Eligibility",
        content: [
            "Contests are open to all registered DevForage users who are at least 16 years old.",
            "Employees, affiliates, and immediate family members of DevForage staff are not eligible to participate.",
            "Users must have an active account and valid email address on DevForage.",
        ],
    },
    {
        title: "Contest Participation",
        content: [
            "Only entries submitted through the official contest platform or submission form will be accepted.",
            "Each participant may submit one entry per contest, unless otherwise stated.",
            "Submissions must be the original work of the participant. Plagiarism or infringement of intellectual property rights will result in disqualification.",
            "DevForage reserves the right to verify the authenticity of any submission.",
        ],
    },
    {
        title: "Contest Rules",
        content: [
            "Each contest will have specific rules, guidelines, and deadlines outlined in the contest announcement.",
            "Participants must comply with the stated format, theme, and technical requirements.",
            "DevForage reserves the right to disqualify entries that do not adhere to the rules or are deemed inappropriate or offensive.",
        ],
    },
    {
        title: "Judging & Winners",
        content: [
            "Contest winners will be selected by DevForage or appointed judges based on criteria such as creativity, originality, and adherence to contest guidelines.",
            "All decisions of the judges are final and binding.",
            "Winners will be notified via email and/or DevForage account notifications.",
        ],
    },
    {
        title: "Prizes",
        content: [
            "Contest prizes will be clearly stated in the contest announcement.",
            "Prizes are non-transferable and cannot be exchanged for cash or other items unless specified.",
            "DevForage reserves the right to substitute prizes of equal or greater value in the event of unavailability.",
        ],
    },
    {
        title: "Intellectual Property",
        content: [
            "Participants retain ownership of their work but grant DevForage a non-exclusive, worldwide, royalty-free license to display, promote, and use the submission for marketing and educational purposes.",
            "Participants represent and warrant that their submissions do not infringe upon any third-party intellectual property rights.",
        ],
    },
    {
        title: "Privacy",
        content: [
            "Personal information collected for contest participation will be used solely for contest administration and prize distribution.",
            "By participating, participants consent to DevForage contacting them regarding contest-related matters.",
        ],
    },
    {
        title: "Liability",
        content: [
            "DevForage is not responsible for any technical errors, lost entries, or issues arising from internet connectivity or device malfunctions.",
            "Participants enter contests at their own risk. DevForage shall not be liable for any damage, loss, or injury resulting from participation or prize acceptance.",
        ],
    },
    {
        title: "Modification & Termination",
        content: [
            "DevForage reserves the right to modify, suspend, or cancel any contest at any time without prior notice.",
            "Contest rules may be updated, and participants are responsible for reviewing the latest terms.",
        ],
    },
    {
        title: "Governing Law",
        content: [
            "These terms are governed by the laws applicable to the DevForage platform. Any disputes will be resolved under the jurisdiction of the relevant courts.",
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