"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import 'animate.css';
import '../app/extra.css'
interface workProps {
    setModals:any,
    setCody:any
}
const Work: React.FC<workProps> = ({setModals, setCody}) => {
    const techstackclass='py-2 px-4 ml-10 bg-white animate__animated animate__fadeInLeftBig'
    const techstack='my-8 px-4 px-4 ml-10 text-white animate__animated animate__fadeInLeftBig'
    return <>
        <div className='grid lg:grid-cols-6 my-10 md:my-40 justify-items-center items-center '>
            
            <div className='lg:col-span-4 relative  ' >
                <div id='playbtn'
                    onClick={() => {setModals(true);setCody(true)}}
                    className='h-32 w-32 rounded-md bg-blue-400 flex items-center justify-center'
                     style={{ position: 'absolute', top: "40%", left: '50%', zIndex: '1' }}>
                    <div style={{
                        borderTop: '20px solid transparent',
                        borderBottom: '20px solid transparent',
                        borderLeft: '30px solid white',
                    }}>

                    </div>
                </div>
                <img src='/cody_figma03.png' alt='figma1' className='lg:mx-10'
                />
            </div>
            <div className='textstyle text-2xl lg:col-span-2 my-20'>
                <p className={techstackclass}>Tech Stack:</p>
                <p className={techstack}>Django, PostgreSQL</p>
                <p className={techstack}>HTML, CSS, jQuery, Figma</p>
                <p className={techstack}>AWS S3</p>
                <p className={techstack}>Docker, Git</p>
            </div>
        </div>
        
    </>
}
export default Work