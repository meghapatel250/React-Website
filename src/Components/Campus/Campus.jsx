import React from 'react'
import './Campus.css'
import back_arrow from '../../assets/back_arrow.svg'

const Campus = () => {
    const image1 = 'https://img.freepik.com/free-photo/students-posing-bench_23-2147650689.jpg?ga=GA1.1.2031644658.1674562410&semt=ais_user'
    const image2 = 'https://img.freepik.com/free-photo/students-posing-bench_23-2147650689.jpg?ga=GA1.1.2031644658.1674562410&semt=ais_user'
    const image3 = 'https://img.freepik.com/free-photo/students-posing-bench_23-2147650689.jpg?ga=GA1.1.2031644658.1674562410&semt=ais_user'
    const image4 = 'https://img.freepik.com/free-photo/students-posing-bench_23-2147650689.jpg?ga=GA1.1.2031644658.1674562410&semt=ais_user'

  return (
    <div className='campus '>
      <div className="gallery">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <button className='btn dark-btn'>See More
        <img src={back_arrow} alt="" />
      </button>
    </div>
  )
}

export default Campus
