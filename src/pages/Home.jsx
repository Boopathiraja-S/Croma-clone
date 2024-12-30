import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { IoPencil } from 'react-icons/io5'
import Box from '../components/Box'
import HeaderImage from "../assets/HeaderImage.png"
import HeaderImageMobile from "../assets/HeadeImageMobile.png"
import offer1Image from "../assets/offer1.png"
import offer1ImageMobile from "../assets/offer1Mobile.png"

import s1 from "../assets/toptrend.png"
import s2 from "../assets/mobile.avif"
import s3 from "../assets/televisons.avif"
import s4 from "../assets/laptops.avif"
import s5 from "../assets/audio.png"
import s6 from "../assets/airConditioners.avif"
import s7 from "../assets/refrigerators.avif"
import s8 from "../assets/washing.avif"
import s9 from "../assets/kitchen.avif"
import s10 from "../assets/grooming.avif"
import s11 from "../assets/tablets.avif"
import s12 from "../assets/cameras.avif"
import s13 from "../assets/accessories.avif"
import s14 from "../assets/gaming.avif"
import SlideAuto from '../components/SlideAuto'

import hightlights1 from "../assets/hightlights1.avif"
import hightlights2 from "../assets/hightlights2.avif"
import hightlights3 from "../assets/hightlights3.avif"

import hightlight4 from "../assets/hightlight4.avif"
import hightlight5 from "../assets/hightlight5.avif"
import hightlight6 from "../assets/hightlight6.avif"
import hightlight7 from "../assets/hightlight7.avif"

import hightlight8 from "../assets/hightlight8.webp"
import hightlight9 from "../assets/hightlight9.avif"
import hightlight10 from "../assets/hightlight10.avif"
import hightlight11 from "../assets/hightlight11.avif"


import newatcroma1 from "../assets/newatcroma1.avif"
import newatcroma2 from "../assets/newatcroma2.avif"

import newatcroma3 from "../assets/newatcroma3.avif"
import newatcroma4 from "../assets/newatcroma4.avif"
import newatcroma5 from "../assets/newatcroma5.avif"
import newatcroma6 from "../assets/newatcroma6.avif"
import newatcroma7 from "../assets/newatcroma7.avif"
import newatcroma8 from "../assets/newatcroma8.avif"
import newatcroma9 from "../assets/newatcroma9.avif"
import newatcroma10 from "../assets/newatcroma10.avif"
import newatcroma11 from "../assets/newatcroma11.avif"
import { accessoriesData } from '../data/AccessoriesData'
import Card from '../components/Card'

const Home = () => {
    return (
        <div>
            <div className=''>
                <div className='flex items-center gap-1 bg-black text-white ml-1 md:hidden'>
                    <FaLocationDot className='text-lg' />
                    <p className='whitespace-nowrap text-sm'>Mumbai, 400049</p>
                    <IoPencil className='text-xs' />
                </div>

                <div>
                    <img src={HeaderImage} className='hidden md:block' />
                    <img src={HeaderImageMobile} className='md:hidden' />
                </div>
                <Box>
                    <div className='p-5 pt-3'>
                        <img src={offer1Image} className='hidden md:block rounded-md overflow-hidden' />
                        <img src={offer1ImageMobile} className='md:hidden rounded-md overflow-hidden' />
                    </div>

                    <SlideAuto width={125}>
                        <div className='flex gap-3 md:gap-6'>
                            <img src={s1} className="w-14 md:min-w-[125px]" />
                            <img src={s2} className="w-14 md:min-w-[125px]" />
                            <img src={s3} className="w-14 md:min-w-[125px]" />
                            <img src={s4} className="w-14 md:min-w-[125px]" />
                            <img src={s5} className="w-14 md:min-w-[125px]" />
                            <img src={s6} className="w-14 md:min-w-[125px]" />
                            <img src={s7} className="w-14 md:min-w-[125px]" />
                        </div>

                        <div className='flex'>
                            <img src={s8} className="w-14 md:min-w-[125px]" />
                            <img src={s9} className="w-14 md:min-w-[125px]" />
                            <img src={s10} className="w-14 md:min-w-[125px]" />
                            <img src={s11} className="w-14 md:min-w-[125px]" />
                            <img src={s12} className="w-14 md:min-w-[125px]" />
                            <img src={s13} className="w-14 md:min-w-[125px]" />
                            <img src={s14} className="w-14 md:min-w-[125px]" />
                        </div>
                    </SlideAuto>

                    {/* highlights */}
                    <div>
                        <h2 className='text-white font-medium text-xl md:text-2xl'>Highlights</h2>

                        <SlideAuto width={200}>
                            <div className='flex justify-between gap-3 my-3'>
                                <img src={hightlights1} className='rounded-lg h-44 md:h-60' />
                                <img src={hightlights2} className='rounded-lg h-44 md:h-60' />
                                <img src={hightlights3} className='rounded-lg h-44 md:h-60' />
                            </div>
                        </SlideAuto>
                    </div>

                    <SlideAuto width={380}>
                        <div className='flex gap-4 justify-between items-center'>
                            <img src={hightlight4} className='rounded-lg h-44 md:h-60' />
                            <img src={hightlight5} className='rounded-lg h-44 md:h-60' />
                            <img src={hightlight6} className='rounded-lg h-44 md:h-60' />
                            <img src={hightlight7} className='rounded-lg h-44 md:h-60' />
                        </div>
                    </SlideAuto>

                    <SlideAuto width={380}>
                        <div className='flex gap-4 justify-between items-center'>
                            <img src={hightlight8} className='rounded-lg h-44 md:h-60' />
                            <img src={hightlight9} className='rounded-lg h-44 md:h-60' />
                            <img src={hightlight10} className='rounded-lg h-44 md:h-60' />
                            <img src={hightlight11} className='rounded-lg h-44 md:h-60' />
                        </div>
                    </SlideAuto>

                    {/* new at croma */}
                    <div className='mt-8 pr-3'>
                        <h2 className='text-white font-medium text-xl md:text-2xl my-5' >New at croma</h2>
                        <div className='flex gap-3 w-1/2'>
                            <img src={newatcroma1} className='rounded-lg' />
                            <img src={newatcroma2} className='rounded-lg' />
                        </div>

                        <SlideAuto width={400}>
                            <div className='flex gap-3'>
                                <img src={newatcroma3} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma4} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma5} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma6} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma7} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma8} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma9} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma10} className='rounded-lg h-44 md:h-60' />
                                <img src={newatcroma11} className='rounded-lg h-44 md:h-60' />
                            </div>
                        </SlideAuto>

                        <div>
                            <h2 className='text-white font-medium text-xl md:text-2xl my-5'>Accessories under 999</h2>
                            <SlideAuto width={400}>

                                <div className='flex-col md:flex-row flex gap-2'>
                                    {
                                        accessoriesData.map(data => {
                                            return (
                                                <Card
                                                    key={data.id}
                                                    id={data.id}
                                                    title={data.title}
                                                    img={data.img}
                                                    SellPrice={data.priceSell}
                                                    DiscPrice={data.priceDis}
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </SlideAuto>
                        </div>
                    </div>
                </Box>
            </div>

        </div>
    )
}

export default Home