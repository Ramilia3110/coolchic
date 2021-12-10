import React from 'react';
import silverGirl from "../../assets/images/girl.png"
import "./styles.scss"

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-img">
                <img src ={silverGirl}  alt ="girl in silver dress"/>
            </div>
            <div className="landing-content">
                <h3>Find your own unique style</h3>
                <button>Shop now</button>
            </div>
        </div>
    )
}

export default Landing

