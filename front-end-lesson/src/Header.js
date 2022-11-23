import React, {useState} from 'react';
import logo from './images/logo_netflix.png';
import './header.css';
import Navlinks from './Navlinks';

function Header() {

    return(
        <div className='Header'>
            <img src={logo} className='logo'/>
            <Navlinks/>

        </div>
    )
}

export default Header