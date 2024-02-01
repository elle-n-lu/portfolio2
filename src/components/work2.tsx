"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import 'animate.css';
import '../app/extra.css'
interface work2Props {
    setModals: any,
    setCms: any
}
const Work2: React.FC<work2Props> = ({ setModals, setCms }) => {
    const techstackclass = 'py-2 px-4 ml-10 bg-white animate__animated animate__fadeInLeftBig'
    const techstack = 'my-8 px-4 ml-10 text-white animate__animated animate__fadeInLeftBig'

    return <>
        <div className='grid lg:grid-cols-6 justify-items-center items-center my-10 md:my-40 '>
            <div className=' lg:col-span-4 relative' >
                <div id='playbtn'
                    onClick={() => { setModals(true); setCms(true) }}
                    className='h-32 w-32 rounded-md bg-pink-400 flex items-center justify-center'
                    style={{ position: 'absolute', top: "50%", left: '50%', zIndex: '1' }}>
                    <div style={{
                        borderTop: '20px solid transparent',
                        borderBottom: '20px solid transparent',
                        borderLeft: '30px solid white',
                    }}>

                    </div>
                </div>
                <img
                   
                    src='/cms_figma02.png' alt='figma1' className='lg:mx-10'

                />
            </div>
            <div className='textstyle text-2xl lg:col-span-2 my-20'>
                <p className={techstackclass} ><span id='borderImg'>Tech Stack:</span></p>
                <p className={techstack}><span id='borderImg'>Django</span></p>
                <p className={techstack}><span id='borderImg'>HTML, CSS, javascript</span></p>
                <p className={techstack}><span id='borderImg'>AWS S3, RDS</span></p>
                <p className={techstack}><span id='borderImg'>Docker, Git</span></p>
                <div className='flex items-center  '>
                    <a href="https://github.com/elle-n-lu/django_deployByEB" className={`${techstack} h-6 hover:text-orange-400 hover:border-b-2 hover:border-orange-400`} >Check Website</a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6 animate__animated animate__fadeInLeftBig">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                    </svg>
                </div>
            </div>

        </div>
    </>
}
export default Work2