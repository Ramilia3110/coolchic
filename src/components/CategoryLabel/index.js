import React from 'react';
import "./styles.scss";

const Categorylabel = ({title, img}) => {
    return (
        <div className='label-category'>
             <div className="label-content">
                <img src = {img}/>
                <h3 className="label">{title}</h3> 
            </div> 
        </div>
    )
}

export default Categorylabel
