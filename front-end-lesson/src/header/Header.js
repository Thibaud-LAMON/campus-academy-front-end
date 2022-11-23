import React, {useState, useEffect} from 'react';
import logo from './images/logo_netflix.png';
import './header.css';

function Header() {

    return(
        <nav className='Header'>
            <img src={logo} className='logo'/>
            <ul className='liste'>
                <li className='items'><b>Home</b></li>
                <li className='items'>TV shows</li>
                <li className='items'>Movies</li>
                <li className='items'>New & popular</li>
                <li className='items'>My list</li>
                <li className='items'>Browse by language</li>
            </ul>
        </nav>
    )
}

export default Header