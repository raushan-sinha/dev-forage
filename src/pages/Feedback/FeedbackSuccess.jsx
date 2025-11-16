import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FeedbackSuccess = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center py-12 bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
                    <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-black mb-2">Thank You!</h2>
                    <p className="text-black">Your feedback has been submitted successfully.</p>
                </div>
            </div>
        </>
    );
}

export default FeedbackSuccess;