import { ArrowDownward } from '@mui/icons-material'
import React from 'react'

const ScrollToDown = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    return (
        <button className='bg-blue-500 fixed bottom-3 right-5 px-3 py-1 rounded-xl cursor-pointer' onClick={scrollDown}>
            <ArrowDownward fontSize='medium' />
        </button>
    )
}

export default ScrollToDown;