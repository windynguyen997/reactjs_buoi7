import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className='header'>
            <input placeholder='Enter Location'></input>
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    );
}

export default Header;
