import React, { useEffect } from 'react'
import { revealInterval } from './ScrollReveal';
import ScrollReveal from 'scrollreveal';

const FruitCard = ({ img, title, subTitle = "Organic Fruit", price, cart = false }) => {
    useEffect(() => {
        ScrollReveal().reveal('.interval', revealInterval);
    })
    return (
        <div className="w-[250px] pt-15 pb-3 mx-auto skew-x-10 rounded-3xl bg-gray-300  relative interval">
            <div className="transform -skew-x-10">
                <img src={img} alt="" className="w-30 mx-auto absolute -top-30 right-18 transition-all duration-200 hover:-top-32" />
                <p className="text-3xl text-white text-center font-extrabold mt-1">{title}</p>
                <p className="text-white text-center">{subTitle}</p>
                <p className="text-center mt-3 text-3xl font-bold text-white">{price} </p>
                {cart && 
                    <div className="flex justify-end">
                        <span className="text-primary cursor-pointer">
                            <svg className='w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z"></path></svg>
                        </span>
                    </div>
                }
            </div>
        </div>
    );
};


export default FruitCard