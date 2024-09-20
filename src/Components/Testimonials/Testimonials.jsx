import React, { useRef } from 'react';
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
     const slider= useRef();
     let Tx =0
     const sliderForwrd =()=>{
           if(Tx > -50){
               Tx -= 25;
           }
           slider.current.style.transform = `translateX(${Tx}%)`
     }

     const sliderBackward =()=>{
               if(Tx < 0){
                    Tx += 25;
               }
               slider.current.style.transform = `translateX(${Tx}%)`
     }
  return (
    <div className='testimonials'>
       <img src={next_icon} alt="" className="next-btn"  onClick={sliderForwrd}/>
       <img src={back_icon} alt="" className="back-btn"  onClick={sliderBackward} />
       <div className="slider">
        <ul  ref={slider}>
            <li>
                 <div className="slide">
                      <div className="user-info">
                           <img src={user_1} alt="" />
                           <div>
                              <h3>Willian Jackson</h3>
                              <span>Edusity ,USA</span>
                           </div>
                           
                      </div>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, </p>
                 </div>
            </li>
            <li>
                 <div className="slide">
                      <div className="user-info">
                           <img src={user_2} alt="" />
                           <div>
                              <h3>Willian Jackson</h3>
                              <span>Edusity ,USA</span>
                           </div>
                      </div>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                 </div>
            </li>
            <li>
                 <div className="slide">
                      <div className="user-info">
                           <img src={user_3} alt="" />
                           <div>
                              <h3>Willian Jackson</h3>
                              <span>Edusity ,USA</span>
                           </div>
                      </div>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going</p>
                 </div>
            </li>
            <li>
                 <div className="slide">
                      <div className="user-info">
                           <img src={user_4} alt="" />
                           <div>
                              <h3>Willian Jackson</h3>
                              <span>Edusity ,USA</span>
                           </div>
                      </div>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use </p>
                 </div>
            </li>
        </ul>
       </div>
      
    </div>
  );
}

export default Testimonials;
