import React from 'react'
import { Link } from 'react-router-dom';

export default function LoginBtn() {
    return (
        <Link to="/login">
            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-300">
                Login
            </button>
        </Link>
    );
}
