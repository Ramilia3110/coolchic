import React from 'react';
import Product from "../Product";
import summerCollection from "./../../data/data3";
import summerGirl from "./../../assets/images/summer-girl.jpg";
import set1 from "./../../assets/images/set1.jpg";
import set2 from "./../../assets/images/set2.jpg";
import set3  from "./../../assets/images/set3.jpg";
import './styles.scss';

const Summer = () => {
    return (
        <div className='summer'>
            <div className='summer-set'>
                <div className='summer-set1'>
                    <img src ={summerGirl}/>
                </div>
                <div className='summer-set2'>
                    <div className='summer-set2_text'>
                        <h2>Summer collection</h2>
                        <p>All the new trends of the new coming season</p>
                        <button>Go shoping</button>
                    </div>
                    <div className='summer-set2_img'>
                        <div className='set2-img'><img src={set2}/></div>
                        <div className='set2-img'><img src={set1}/></div>
                        <div className='set2-img'><img src={set3}/></div>
                    </div>
                </div>
                </div> 
                <h2 className='trend-title'>summer trends</h2>
            <div className="summer-container">  
            {summerCollection.map((product, index) => {
                  const productCon = { ...product, index };
                  return <Product key={index} {...productCon} />;
              })}
            </div>   
        </div>
    )
}

export default Summer
