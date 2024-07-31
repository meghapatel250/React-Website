import React from 'react'
import './Hero.css'
import back_arrow from '../../assets/back_arrow.svg'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className='hero-text'>
                <p>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, porro.</h1>
                    Lorem ipsuPerferendis ratione sint sequi delectus placeat cum rerum ut quia fugiat quas a, culpa saepe laborum. Fuga, id. Ad alias, ipsam voluptatibus culpa quod aliquid quae rem adipisci molestias temporibus similique incidunt.
                </p>
                <button className='btn'>Explore More <img src={back_arrow}/> </button>
            </div>
        </div>
    )
}

export default Hero
