import React, {useRef} from 'react'
import './Testimonials.css'


const Testimonials = () => {
    const nextImage = 'https://cdn-icons-png.flaticon.com/128/8213/8213522.png'
    const backImage = 'https://cdn-icons-png.flaticon.com/128/8213/8213500.png'
    const userImg = 'https://img.freepik.com/premium-photo/happy-successful-adult-businesswoman-formal-outfit-stylish-glasses-smiling-looking-while-standing-with-arms-crossed_251859-2390.jpg?ga=GA1.1.2031644658.1674562410&semt=sph'
    
      const slider = useRef();
      let tx = 0;

      const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)`
      }

      const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        } 
        slider.current.style.transform = `translateX(${tx}%)` 
    }

    return (
        <div className='testimonials'>
            <img src={nextImage} alt="" className='next-btn' onClick={slideForward} />
            <img src={backImage} alt="" className='back-btn' onClick={slideBackward}/>
            
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={userImg} alt="" />
                                <div>
                                    <h3>William Jackson 1</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum omnis ipsam eum explicabo sunt inventore, repellendus nemo quos earum.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={userImg} alt="" />
                                <div>
                                    <h3>William Jackson 2</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum omnis ipsam eum explicabo sunt inventore, repellendus nemo quos earum.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={userImg} alt="" />
                                <div>
                                    <h3>William Jackson 3</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum omnis ipsam eum explicabo sunt inventore, repellendus nemo quos earum.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={userImg} alt="" />
                                <div>
                                    <h3>William Jackson 4</h3>
                                    <span>Educity,USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illum omnis ipsam eum explicabo sunt inventore, repellendus nemo quos earum.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials
