export const signupData = {
    heading: "Create Your DevForage Account",
    subHeading: "Join DevForage to learn, share, and grow as a developer.",
    fields: [
        {
            id: "name",
            label: "Full Name",
            type: "text",
            placeholder: "Enter your full name",
            autocomplete: "name",
        },
        {
            id: "email",
            label: "Email Address",
            type: "email",
            placeholder: "Enter your email",
            autocomplete: "email",
        },
        {
            id: "password",
            label: "Password",
            type: "password",
            placeholder: "Create a strong password",
            autocomplete: "new-password",
        },
        {
            id: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            placeholder: "Re-enter your password",
            autocomplete: "new-password",
        },
    ],
    buttonText: "Sign Up",
    footerText: "Already have an account?",
    footerLinkText: "Login here",
    footerLink: "/login",
};