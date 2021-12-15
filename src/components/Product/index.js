import React from 'react';
import like from "./../../assets/icons/like.svg";
import comments from "./../../assets/icons/comments.svg";

import "./styles.scss";

const Prouct = (product, index) => {
    const {id,  modelImg,name,likeNumber,feedbackNumber,price} = product;
 

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={modelImg}/>
            </div>
            <div className='product-content'>
            <h4>{name}</h4>
             
               <ul>
                   <li>
                       <img className='icon-categoty' src={like}/>
                       <p>{likeNumber}</p>
                   </li>
                   <li>
                       <img className='icon-categoty'  src={comments}/>
                       <p>{feedbackNumber}</p>
                   </li>
                   <li>
                       <p className='dollar'>$</p>
                       <p>{price}</p>
                   </li>
               </ul>
            </div>
        </div>
    )
}

export default Prouct
