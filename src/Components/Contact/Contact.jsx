import React from 'react'
import './Contact.css'

const Contact = () => {

    const msgIcon = 'https://cdn-icons-png.flaticon.com/128/7286/7286142.png'
    const mailIcon = 'https://cdn-icons-png.flaticon.com/128/732/732200.png'
    const phoneIcon = 'https://cdn-icons-png.flaticon.com/128/5585/5585856.png'
    const locationIcon = 'https://cdn-icons-png.flaticon.com/128/535/535137.png'

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a Message
            <img src={msgIcon} alt="" />
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laboriosam rem quibusdam praesentium accusantium voluptates accusamus, explicabo voluptatem facere placeat.</p>
        <ul>
            <li>
                <img src={mailIcon} alt="" />
                Contact@gmail.com</li>
            <li>
            <img src={phoneIcon} alt="" />
                +91 7887563376</li>
            <li>
            <img src={locationIcon} alt="" />
                77 Machautess Ave, Cambridge <br /> MA 0987, USA</li>
        </ul>
      </div>
      <div className="contact-col">
        <form action="">
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your Mobile Number' required />
            <label>Write your Message here</label>
            <textarea name="message" rows="6" placeholder='Enter your Message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
