import { getAuth, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_GITHUB_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_GITHUB_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_GITHUB_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_GITHUB_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_GITHUB_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_GITHUB_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_GITHUB_MESUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const githubAuth = getAuth(app);
const githubProvider = new GithubAuthProvider();

export { githubAuth, githubProvider }