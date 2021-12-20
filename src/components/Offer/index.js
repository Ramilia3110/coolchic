import React from 'react';
import perfume from "./../../assets/images/perfume.png"
import "./styles.scss";

const Offer = () => {
return (
<div class="offer" id="offers">

    <div class="offer-container">
       <div class="inner-container">
            <div class="offer-img">
              <img src={perfume} alt />
            </div>
            <div class="offer-text">
              <h3>Special offer</h3>
              <h1>70% discount</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Eius eum illo quaerat sunt placeat
                repellat atque ex.
              </p>
            </div>
       </div>
    </div> 
</div>
   
  
    )
}

export default Offer
