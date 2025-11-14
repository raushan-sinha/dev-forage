import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const FeedbackSuccess = () => {
    return (
        <>
            <div className="text-center py-12">
                <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
                <p className="text-gray-600">Your feedback has been submitted successfully.</p>
            </div>
        </>
    );
}

export default FeedbackSuccess;