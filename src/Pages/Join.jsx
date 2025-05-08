import React from 'react'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { revealBottom } from '../Components/ScrollReveal'


const Join = () => {

  useEffect(() => {
    ScrollReveal().reveal('.bottom', revealBottom);
  }, [])
  return (
    <section  className='pt-[15vh] px-[10%]'>
      <div id="join" className="w-full h-[50vh] rounded-4xl relative flex justify-center items-center bottom">
        <div className="z-10 text-white flex flex-col items-center justify-center text-center relative px-5">
          <p className="text-5xl font-extrabold">Receive The <br />Best Fruits</p>
          <p className='w-80 lg:w-100 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolore consequatur aliquid laudantium perspiciatis ipsam!</p>
          <input type="email" placeholder='Enter Your Email' className='w-auto text-black bg-white rounded-3xl mt-5 pl-5 pr-45 py-5 lg:w-150'/>
          <button className="px-5 py-3 bg-primary text-white rounded-3xl cursor-pointer font-bold absolute bottom-2 right-4">Subscribe Now</button>
        </div>
        <div className="cover-bg z-1 absolute top-0 bottom-0 left-0 right-0 bg-transparent backdrop-blur-xs"></div>
      </div>
      
    </section>
  )
}

export default Join