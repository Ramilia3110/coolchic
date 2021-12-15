import React from 'react';
import wood from "./../../assets/images/wood.svg";
import CategoryLabel from '../CategoryLabel';
import Product from "./../Product";
import women from "./../../data";
import men from "./../../data2";

import "./styles.scss";


const Women = () => {
    return (
        <div className="category">
           <CategoryLabel title={"women"} img={wood}/>   
          
           <div className="women-container">
              {women.map((product, index) => {
                  const productCon = { ...product, index };
                  return <Product key={index} {...productCon} />;
              })}
            </div>  
            <CategoryLabel title={"men"} img={wood}/>   
            <div className="women-container">
              {men.map((product, index) => {
                  const productCon = { ...product, index };
                  return <Product key={index} {...productCon} />;
              })}
            </div> 


        </div>
    )
}

export default Women
