import React, { useRef } from 'react'
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const SlideAuto = ({ children, width }) => {

    const contentBoxRef = useRef()

    function RightScroll(){
        contentBoxRef.current.scrollLeft += width;
    }
    function LeftScroll(){
        contentBoxRef.current.scrollLeft -= width;
    }

    return (
        <div className='flex my-4'>
            <button 
            className='text-white text-xl hidden md:block'
            onClick={LeftScroll}
            ><LiaAngleLeftSolid /></button>
            <div 
            className='md:flex overflow-scroll scrollbar-none'
            ref={contentBoxRef}
            >{children}
            </div>
            <button 
            className='text-white text-xl hidden md:block'
            onClick={RightScroll}
            ><LiaAngleRightSolid /></button>
        </div>
    )
}

export default SlideAuto