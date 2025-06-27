import React, { useEffect } from 'react'
import Button from '../Components/Button'
import SectionTitle from '../Components/SectionTitle'
import FruitCard from '../Components/FruitCard'
import ScrollReveal from 'scrollreveal'
import { revealLeft, revealRight } from '../Components/ScrollReveal'

//Image
import aboutImg from '../assets/Images/about-fruits.png'

const About = () => {

  useEffect(() => {
    ScrollReveal().reveal('.left', revealLeft);
    ScrollReveal().reveal('.right', revealRight);
  }, [])


  return (
    <section className='pt-[15vh] px-[10%]'>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="flex justify-center items-center lg:w-1/2 left">
            <div className="home-data-container text-center lg:text-start">
              <SectionTitle title={`We Provide Healthy Fruits`}/>
              <p className="w-100 mx-auto mt-5 lg:w-120">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vitae consectetur. Cumque ea earum beatae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ipsa Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ipsum fuga omnis animi dicta sit..</p>
              <div className="mt-8 text-center lg:text-start">
                <Button text="Order Fruit Now" />
              </div>
            </div>
          </div>

          <div className=" mt-10 flex justify-center items-center lg:w-1/2 lg:mt-0 right">
            <div className="home-img-container justify-center items-center">
              <img src={aboutImg} alt="" className='w-80 xl:w-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About