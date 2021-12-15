import React from 'react';
import wood from "./../../assets/images/wood.svg";
import CategoryLabel from '../CategoryLabel';
import Product from "./../Product";
import women from "./../../data";

import "./styles.scss";


const Women = () => {
   const men =  [
    {
      id: 1,

      name: "Black suit/dress",
      likeNumber: "1,305",
      feedbackNumber: "125",
      price: "320",
    },
    {
      id: 2,
    
      name: "Black suit/dress",
      likeNumber: "1,305",
      feedbackNumber: "125",
      price: "280",
    },
    {
      id: 3,
    
      name: "Black suit/dress",
      likeNumber: "1,305",
      feedbackNumber: "125",
      price: "230",
    },
    {
      id: 4,
    
      name: "Black suit/dress",
      likeNumber: "1,305",
      feedbackNumber: "125",
      price: "120",
    },
  ];

    return (
        <div className="women">
           <CategoryLabel title={"women"} img={wood}/>   
          
           <div className="women-container">
              {women.map((product, index) => {
                  const productCon = { ...product, index };
                  return <Product key={index} {...productCon} />;
              })}
               </div>  
        </div>
    )
}

export default Women
