import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToDown = () => {
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

    //TODO: Direct render to down section -
    const scrollDown = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }

    //TODO: Direct render to down section -
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    //TODO: Scroll reset after changing the page -
    useEffect(() => {
        setScroll(false);
    }, [location.pathname]);


    return (
        <>
            <div onClick={() => setScroll(!scroll)}>
                {scroll ? (
                    <button className='bg-red-400 fixed bottom-3 right-5 px-3 py-1 rounded-t-full cursor-pointer' onClick={scrollTop}>
                        <ArrowUpward fontSize='medium' />
                    </button>
                ) : (
                    <button className='bg-blue-500 fixed bottom-3 right-5 px-3 py-1 rounded-b-full cursor-pointer' onClick={scrollDown}>
                        <ArrowDownward fontSize='medium' />
                    </button>
                )}
            </div>
        </>


    )
}

export default ScrollToDown;