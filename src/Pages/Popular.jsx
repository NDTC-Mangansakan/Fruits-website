import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import FruitCard from '../Components/FruitCard'

const Popular = () => {
  return (
    <section className='py-[10vh] px-[10%]'>
      <div className="w-full">
        <SectionTitle title="Popular Fruits" position="text-center" />

        <div className="max-w-[1024px] mx-auto mt-20 grid gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FruitCard img="../src/assets/img/popular-1.png" title="Apple" price="$5" cart={true}/>
          <FruitCard img="../src/assets/img/popular-2.png" title="Watermelon" price="$5" cart={true} />
          <FruitCard img="../src/assets/img/popular-3.png" title="Pineapple" price="$5" cart={true} />
          <FruitCard img="../src/assets/img/popular-4.png" title="Banana" price="$5" cart={true} />
          <FruitCard img="../src/assets/img/popular-5.png" title="Strawberry" price="$5" cart={true} />
          <FruitCard img="../src/assets/img/popular-6.png" title="Mango" price="$5" cart={true} />
        </div>
      </div>
    </section>
  )
}

export default Popular