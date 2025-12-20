import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_GOOGLE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_GOOGLE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_GOOGLE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_GOOGLE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_GOOGLE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_GOOGLE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_GOOGLE_MESUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const googleAuth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { googleAuth, googleProvider }