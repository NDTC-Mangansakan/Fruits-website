import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import FruitCard from '../Components/FruitCard'

//Images
import popularImg1 from '../assets/Images/popular-1.png'
import popularImg2 from '../assets/Images/popular-2.png'
import popularImg3 from '../assets/Images/popular-3.png'
import popularImg4 from '../assets/Images/popular-4.png'
import popularImg5 from '../assets/Images/popular-5.png'
import popularImg6 from '../assets/Images/popular-6.png'

const Popular = () => {
  return (
    <section className='py-[10vh] px-[10%]'>
      <div className="w-full">
        <SectionTitle title="Popular Fruits" position="text-center" />

        <div className="max-w-[1024px] mx-auto mt-20 grid gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FruitCard img={popularImg1} title="Apple" price="$5" cart={true}/>
          <FruitCard img={popularImg2} title="Watermelon" price="$5" cart={true} />
          <FruitCard img={popularImg3} title="Pineapple" price="$5" cart={true} />
          <FruitCard img={popularImg4} title="Banana" price="$5" cart={true} />
          <FruitCard img={popularImg5} title="Strawberry" price="$5" cart={true} />
          <FruitCard img={popularImg6} title="Mango" price="$5" cart={true} />
        </div>
      </div>
    </section>
  )
}

export default Popular