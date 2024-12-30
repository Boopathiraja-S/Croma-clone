import React from 'react'
import logo from "../assets/Croma_Logo.svg"
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { BiSolidCart } from "react-icons/bi";
import Box from './Box';

const Header = () => {
    return (
        <header className='bg-black text-white'>
            {/* desktop version */}
            <Box>
                <div className='hidden md:flex justify-between items-center p-3'>
                    {/* left side */}
                    <div className='flex items-center gap-12 w-4/5'>
                        <div className='w-32 min-w-[128px]'>
                            <img src={logo} className='w-full' />
                        </div>
                        <div className='flex items-center'>
                            <IoMenu className='text-3xl' />
                            <p className='text-sm'>Menu</p>
                        </div>
                        <div className='flex items-center h-9 w-full max-w-md px-2 rounded-md bg-white'>
                            <input type="text" placeholder='What are you looking for ?'
                                className='w-full bg-transparent outline-none border-none text-black px-3 placeholder:text-sm'
                            />
                            <CiSearch className='text-2xl text-black' />
                        </div>
                    </div>

                    {/* right side */}
                    <div className='flex items-center gap-9'>
                        <div className='flex items-center gap-1'>
                            <FaLocationDot className='text-xl' />
                            <p className='whitespace-nowrap text-sm'>Mumbai, 400049</p>
                            <IoPencil className='text-xs' />
                        </div>
                        <div className='text-2xl'>
                            <FaUser />
                        </div>
                        <div className='text-3xl relative'>
                            <BiSolidCart />
                            <p
                                className='absolute top-1 -right-0 text-xs bg-greenblue rounded-full w-3 h-3 text-center flex justify-center items-center text-black'
                            >0</p>
                        </div>
                    </div>
                </div>

                {/* mobile version */}
                <div className='block md:hidden'>

                    <div className='flex justify-between items-center'>
                        {/* left */}
                        <div className='flex items-center gap-1'>
                            <IoMenu className='text-4xl' />
                            <div className='w-20'>
                                <img src={logo} className='w-full' />
                            </div>
                        </div>
                        {/* right */}
                        <div className='flex items-center gap-4 mr-1'>
                            <div className='text-xl'>
                                <FaUser />
                            </div>
                            <div className='text-2xl relative'>
                                <BiSolidCart />
                                <p
                                    className='absolute top-1 -right-0 text-xs bg-greenblue rounded-full w-3 h-3 text-center flex justify-center items-center text-black'
                                >0</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                    <div className='flex items-center h-8 w-full px-2 rounded-md bg-white'>
                            <input type="text" placeholder='What are you looking for ?'
                                className='w-full bg-transparent outline-none border-none text-black px-3 placeholder:text-sm'
                            />
                            <CiSearch className='text-2xl text-black' />
                        </div>
                    </div>
                </div>
            </Box>

        </header>
    )
}

export default Header