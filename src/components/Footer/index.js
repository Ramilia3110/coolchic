import React from 'react';
import apple from "./../../assets/icons/appstore.svg";
import google from "./../../assets/icons/googleplay.svg";
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-content'>
                <div className="box">
                    <h4 className="logo">
                            Cool
                         <span className="chic">Chic</span>
                    </h4>
                    <img className="appI" src={google} alt />
                    <img className="appI" src={apple} alt />
                </div> 
                <div className="box">
                    <h3>Useful Links</h3>
                    <ul className="social-links">
                        <li>
                            <a href>Instagram</a>
                        </li>
                        <li>
                            <a href>LinkedIn</a>
                        </li>
                        <li>
                            <a href>Facebook</a>
                        </li>
                       
                    </ul>
                </div> 
            </div>
            <div className="copyright">
                 <p><span>&#169;</span> 2022 All rights reserved</p>
             </div>
           
       </div>
    )
}

export default Footer;

