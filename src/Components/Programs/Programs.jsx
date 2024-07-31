import React from 'react'
import './Programs.css'
import icon_building from '../../assets/icon_building.svg'

const Programs = () => {
    const imageUrl = 'https://img.freepik.com/premium-photo/woman-wearing-glasses-backpack-with-green-back-pack_403587-1679.jpg?ga=GA1.1.2031644658.1674562410&semt=sph';
  return (
    <div className='programs'>
        {/* First Image */}
      <div className="program">
        <img src={imageUrl}/>
        <div className="caption">
            <img src={icon_building} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>

       {/* Second Image */}
      <div className="program">
        <img src={imageUrl}/>
        <div className="caption">
            <img src={icon_building} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>

      {/* Third Image */}
      <div className="program">
        <img src={imageUrl}/>
        <div className="caption">
            <img src={icon_building} alt="" />
            <p>Graduation Degree</p>
        </div>
      </div>

      
    </div>
  )
}

export default Programs
