"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import 'animate.css';
import '../app/extra.css'
interface work3Props {
    setModals: any
    setGame: any
}
const Work3: React.FC<work3Props> = ({ setModals, setGame }) => {
    const techstack = 'my-8 px-4 ml-10 text-white animate__animated animate__fadeInLeftBig'

    return <>
        <div className='grid lg:grid-cols-6 my-10 md:my-40 justify-items-center'>
            <div className=' lg:col-span-4 relative  ' >
                <div id='playbtn'
                    onClick={() => { setModals(true); setGame(true) }}
                    className='h-32 w-32 rounded-md bg-blue-400 flex items-center justify-center'
                    style={{ position: 'absolute', top: "40%", left: '50%', zIndex: '1' }}>
                    <div
                        style={{
                            borderTop: '20px solid transparent',
                            borderBottom: '20px solid transparent',
                            borderLeft: '30px solid white',
                        }}>

                    </div>
                </div>
                <img src='/moviebook_figma.png' alt='figma1' className='lg:mx-10'

                />
            </div>
            <div className='textstyle text-2xl lg:col-span-2 my-20'>
                <p className=' py-2 px-4 m-10 bg-white animate__animated animate__fadeInRightBig'>Tech Stack:</p>
                <p className={techstack}>Flask, PostgreSQL</p>
                <p className={techstack}>React, Next.js, TypeScript, TailwindCSS</p>
                <p className={techstack}>Git, Heroku, Netlify </p>
            </div>

        </div>
    </>
}
export default Work3