import { ArrowUpward } from '@mui/icons-material'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollShow = () => {
    const [scroll, setScroll] = useState(false);
    const location = useLocation();

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
            <div>
                <button className='bg-red-400 fixed bottom-3 right-5 p-2 rounded-full cursor-pointer' onClick={scrollTop}>
                    <ArrowUpward fontSize='large' />
                </button>
            </div>
        </>


    )
}

export default ScrollShow;