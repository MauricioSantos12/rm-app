import './header.scss';
import { Menu, X } from 'feather-icons-react';
import React, { useState } from 'react';
const Header = () => {
    const [showMenu, setShowMenu] = useState(false); 
    return (
        <nav>
            <h1>RICK AND MORTY APP</h1>
            <ul className={showMenu ? 'show': ''}>
                <li onClick={()=> setShowMenu(false)}><a href="#" >Show more</a></li>
            </ul>
            <button className="menu-hamburguesa" id="menu-hamburguesa" aria-label="hamburguer-menu">
                {!showMenu ?
                <Menu onClick={()=> setShowMenu(!showMenu)}/>
                :
                <X onClick={()=> setShowMenu(!showMenu)}/>
                }
            </button>
        </nav>
    )
}

export default Header