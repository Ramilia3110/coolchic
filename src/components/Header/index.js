import React from 'react';
import {HiOutlineMenuAlt1} from "react-icons/hi";
import {links} from "./../../data/data1";
import "./styles.scss";

const Header = () => {
    const openMenu = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle('active');
    }
   
    return (
        <div className='header'>
             <h4 className="nav-logo">
                            Cool
                         <span className="chic">Chic</span>
            </h4>
            <div className='menu-btn' onClick={openMenu}>
                <HiOutlineMenuAlt1 className='menu-icon'/>
            </div>
            <nav className='navbar'>
            {links.map((link) => {
            return (
              <a href={link.url} key={link.id} onClick={openMenu}>
                {link.text}
              </a>
            )
          })}
            </nav>       
        </div>
    )
}

export default Header
