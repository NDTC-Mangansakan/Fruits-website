import React, { useEffect } from 'react'
import Button from '../Components/Button'
import SectionTitle from '../Components/SectionTitle'
import FruitCard from '../Components/FruitCard'
import ScrollReveal from 'scrollreveal'
import { revealLeft, revealRight } from '../Components/ScrollReveal'

// images
import mainHomeImg from '../assets/Images/home-fruits.png'
import enjoyImg1 from '../assets/Images/enjoy-1.png'
import enjoyImg2 from '../assets/Images/enjoy-2.png'
import enjoyImg3 from '../assets/Images/enjoy-3.png'

const Home = () => {

  useEffect(() => {
    ScrollReveal().reveal('.left', revealLeft);
    ScrollReveal().reveal('.right', revealRight);
  }, [])


  return (
    <section className='pt-[10vh] px-[10%]'>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center items-center lg:justify-start lg:w-1/2 left">
            <div className="home-data-container text-center lg:text-start">
              <p className="text-5xl font-extrabold xl:text-7xl">Enjoy The <br />Best Fresh <br />Fruits</p>
              <p className="w-100 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, vitae consectetur. Cumque ea earum beatae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, ipsa.</p>
              <div className="mt-8 text-center lg:text-start">
                <Button text="Order Fruit Now" />
              </div>
            </div>
          </div>
          
          <div className=" mt-10 flex justify-center items-center lg:w-1/2 lg:mt-0 right">
            <div className="home-img-container justify-center items-center">
              <img src={mainHomeImg} alt="" className='w-80 lg:w-120 xl:w-150' />
            </div>
          </div>
        </div>

        <div className="py-15 flex-col justify-center items-center">
          <SectionTitle title="Eat and Enjoy" position="text-center"/>
          <div className=" mt-15 flex flex-col gap-10 mx-auto max-w-[768px] lg:flex-row">
            <FruitCard img={enjoyImg1} title="Healthy" subTitle="Tropical Fruit"/>
            <FruitCard img={enjoyImg2} title="Delicious" subTitle="Field Fruit" />
            <FruitCard img={enjoyImg3} title="Organic" subTitle="Tropical Fruit" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home