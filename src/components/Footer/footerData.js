export const footerData = {
    brand: {
        name: "DevForage",
        description:
            "Empowering developers with roadmaps, resources, and learning paths to master modern technologies.",
    },
    sections: [
        {
            id: 1,
            title: "Quick Links",
            links: [
                { name: "Home", href: "/" },
                { name: "Courses", href: "/courses" },
                { name: "Roadmaps", href: "/roadmaps" },
                { name: "Support", href: "/support" },
            ],
        },
        {
            id: 2,
            title: "Resources",
            links: [
                { name: "Blog", href: "/blog" },
                { name: "Docs", href: "/docs" },
                { name: "Community", href: "/community" },
                { name: "FAQs", href: "/faqs" },
            ],
        },
        {
            id: 3,
            title: "Company",
            links: [
                { name: "About", href: "/about" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
                { name: "Press", href: "/press" },
            ],
        },
    ],
    socialLinks: [
        { name: "GitHub", href: "https://github.com/", icon: "github" },
        { name: "LinkedIn", href: "https://linkedin.com/", icon: "linkedin" },
        { name: "Twitter", href: "https://twitter.com/", icon: "twitter" },
        { name: "Instagram", href: "https://twitter.com/", icon: "instagram" }
    ],
    copyright: `© ${new Date().getFullYear()} DevForage. All rights reserved.`,
}; 