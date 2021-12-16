import React from 'react';
import wood from "./../../assets/images/wood.svg";
import CategoryLabel from '../CategoryLabel';
import Product from "../Product";

import "./styles.scss";


const Women = ({category, title} ) => {
    return (
        <div className="category">
            {title &&    <CategoryLabel title={title} img={wood}/> }
         
           <div className="category-container">
              {category.map((product, index) => {
                  const productCon = { ...product, index };
                  return <Product key={index} {...productCon} />;
              })}
            </div>  
        </div>
    )
}

export default Women
