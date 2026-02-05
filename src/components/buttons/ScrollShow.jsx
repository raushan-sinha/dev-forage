import ExpandLessIcon from '@mui/icons-material/ExpandLess';
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
                <button className='bg-black text-white fixed bottom-3 right-5 p-1 rounded-full cursor-pointer' onClick={scrollTop}>
                    <ExpandLessIcon fontSize='large' />
                </button>
            </div>
        </>


    )
}

export default ScrollShow;