import React from 'react'
import { IoIosStar } from "react-icons/io";

const Card = ({ img, title, SellPrice, DiscPrice }) => {
    return (
        <div className=''>
            <div className='p-5 bg-[#1e1e1e] min-w-[280px] rounded-lg ml-3'>
                {/* img */}
                <div>
                    <img src={img} />
                </div>
                {/* title */}
                <div>
                    <p className='text-white font-medium text-lg my-2'>{title}</p>
                </div>
                {/* price */}
                <div className='flex gap-2 items-center text-white font-medium text-lg'>
                    <p>{`${SellPrice}`}</p>
                    <p className='line-through text-gray-500 font-normal'>{`${DiscPrice}`}</p>
                </div>
                {/* star */}
                <div className='flex text-gray-500 text-lg my-1 gap-1'>
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                </div>
            </div>
        </div>
    )
}

export default Card