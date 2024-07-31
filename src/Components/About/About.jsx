import React from 'react'
import './About.css'

const About = () => {
    const aboutImage="https://img.freepik.com/premium-photo/contented-young-indian-academic-lady-with-course-materials-backpack_116547-82415.jpg?ga=GA1.2.2031644658.1674562410&semt=sph"
    const playIcon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACUCAMAAABRNbASAAAAY1BMVEX///8AAACQkJClpaVhYWHg4ODy8vLMzMyDg4Ps7Oz7+/vIyMj4+Pjn5+eTk5OsrKwREREeHh7Z2dmdnZ0sLCxycnJmZmZHR0e9vb1ZWVkZGRlPT08ICAiKiopBQUE3Nzd7e3tmnPRNAAACAElEQVR4nO3a23aCMBCFYTfa1p4QK3iqiu//lI2WtqLhkFhm5mL/T/CtxShJyGjEGGOMMcYYY4wxxhhjjLF/LZ29aROaSzB51TY0lgAoHrQVDZ1wwPhR2+HtG4d8rQ3xVeGAzZM25bZfHLZTc8/2D3cavWdtTr0aDitbfyt1HPD5oS266BqHbG/n2d7ggLmZfz0Pzs7oeXHYbUw8Wz/OtX/XprXgcJhp21pwjqf9RmvDISt0R68V50o0eV041dHrxLk3mtro9cABU6V1fC8c5smLXZzS6PXFAUv5xVR/nBs96TdaCA7lwjDutIWU/GUE4oBCcPSCcZKjF4FDPhZ6tjE4sXV8HM6NnsQLNxbn3mjD79GicW4pOvih6B244U+m7sKhHFZ3Fy4deA0fj8uKwX8R0TiJxXskLl9LfL6Iwu1SmXOoGNxEar8TjtvInY8F42aCJ4thuG0i+hkvCLcU3vsH4OQPY/vjJIctDJeJ71n746SHLQAnu1kNwuULtVsAnTjNb+wdOIWjpb64XPleRwsuT1Vlrbij/oWOJpyJ+wh+XDnWdp3z4qzck/Dg7NweusGVWu8qT1e4g41hq6rjVBZGzV3iJrZol7iDvYtgP7hSb2HUXGJy2KrOuJWZf7Z6DreyN2xVeyxMXL7xtjY5bIwxxhhjjDHGGGOMMcbYoH0B+1wTGwGY2/8AAAAASUVORK5CYII="
  return (
    <div className='about'>
      <div className="about-left">
         <img src={aboutImage} alt="" className='about-img'/>
         <img src={playIcon} alt="" className='play-icon'/>
      </div>

      <div className="about-right">
          <h3>About University</h3>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, at?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, aliquid voluptatibus voluptas, illo perferendis quia repellat sapiente labore odio tenetur et? Nihil, eum. Inventore, quasi veniam suscipit illo minus facilis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, harum.</p>
      </div>
    </div>
  )
}

export default About
