import React from 'react';
import silverGirl from "../../assets/images/girl.png"
import "./styles.scss"

const Landing = () => {
    return (
        <div className="landing">
              <div className="landing-content">
                <h1>Find your own unique style</h1>
                <button className="landing-btn">Shop now</button>
            </div>
            <div className="landing-img">
                <div className="landing-img_wrapper">
                          <img src ={silverGirl}  alt ="girl in silver dress"/>
                 </div>
             
            </div>
          
        </div>
    )
}

export default Landing

