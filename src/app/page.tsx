"use client"
import MsgForm from "@/components/msgForm";
import Work from "@/components/work";
import { useEffect, useRef, useState } from "react";
import './extra.css'
import Work2 from "@/components/work2";
import Work3 from "@/components/work3";

export default function Home() {
  const [modal, setModal] = useState(false)
  const [modals, setModals] = useState(false)
  const [cody, setCody] = useState(false)
  const [cms, setCms] = useState(false)
  const [game, setGame] = useState(false)

  const modalRef = useRef<any>(null)

  const handleClick = (e: any) => {
    // e.preventDefault();
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return
    } else {

      setModal(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolling
      if (modal) {
        setModal(false);
      }
    };

    // Add event listener for the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [modal]);

  const introEle = (text1: string, text2: string, top: string, left: any, right: any,
    height: any, width: any) => (
    <div id='introduction'
      className="p-8 text-xl"
      style={{
        position: 'absolute', top: top,
        height: height, width: width,
        left: left,
        right: right,
        zIndex: '1',
        backgroundColor: '#00000091',
        backdropFilter: 'blur(4px)'
      }}><strong className="text-3xl">{text1}</strong>{text2}</div>
  )

  return (<div>

    <div onClick={handleClick}
      style={{
        width: '100%',
        height: '3928px',
        backgroundImage: "url(/bg.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>

      <div className="w-full h-20 flex items-center justify-end pr-20 pt-10">
        <a href="https://github.com/elle-n-lu" target="blank"
          className="h-10 w-10 rounded-full mr-4 flex items-center justify-center hover:bg-white">
          <svg viewBox="0 0 24 24" aria-hidden="true"
            className="h-10 w-10 fill-amber-600"><path fillRule="evenodd"
              clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z">
            </path></svg>
        </a>
        <a href="https://www.linkedin.com/in/ellen-lu-webdeveloper/" target="blank"
          className="h-10 w-10 rounded-full mr-4 flex items-center justify-center hover:bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" fill='#007bff'
            viewBox="0 0 511 512">
            <path
              d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
              data-original="#000000" />
          </svg>
        </a>
        <div id="avatar" className=" h-20 w-20 bg-white rounded-full hover:border-2 hover:border-second"
        style={{backgroundImage:'url(/avatar.png)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'}}
          onClick={(e) => {
            e.stopPropagation();
            setModal(!modal)
          }}>
        </div>
      </div>
      {modal && <div ref={modalRef}
        className='textstyle text-white flex rounded-md '
      >
        {introEle('My', 'passion drives me ot find new ways ot improve myself and my technical skils.',
          '18vh', '35vh', '', '22vh', '20vw')}
        {introEle("I'", 'am a passionate ful stack developer that enjoys developing web and mobile apps.',
          '21vh', '', '70vh', '25vh', '20vw')}
        {introEle('I', ' take responsibility for my actions and work well with others.',
          '25vh', '', '35vh', '25vh', '15vw')}
      </div>}
      <div className={` ${modal ? 'codywork' : 'codyworkout'}`} style={{
        zIndex: '2',
      }}>
        <Work setModals={setModals} setCody={setCody} />
        <Work2 setModals={setModals} setCms={setCms} />
        <Work3 setModals={setModals} setGame={setGame} />
        <MsgForm />
      </div>

    </div>
    <p className="text-center">&copy;Ellen Lu</p>

    {/*  Main modals */}
    {modals && <div
      className='flex items-center justify-center' style={{
        position: 'fixed', top: '0',
        left: '0',
        height: '100vh', width: '100%',
        zIndex: '10',
        backgroundColor: '#00000091',
        backdropFilter: 'blur(4px)',
      }}>
      <button className='text-white h-10 w-10 rounded-md bg-gray-500 absolute top-6 right-4'
        onClick={() => {
          setModals(false);
          if (cody) { setCody(false) }
          if (cms) { setCms(false) }
          if (game) { setGame(false) }
        }}>x</button>
      <video controls className='w-3/4'>
        {cody && <source src="/cody-demo.mp4" type="video/mp4" />}
        {cms && <source src="/cms-demo.mp4" type="video/mp4" />}
        {game && <source src="/moviebook_comp.mp4" type="video/mp4" />}
      </video>
    </div>
    }</div>
  );
}

