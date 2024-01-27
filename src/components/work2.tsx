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
            </div>

        </div>
    </>
}
export default Work2