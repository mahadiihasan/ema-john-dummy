import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <nav className='header container'>
            <img src={logo} alt="" />
            {/* a*4[href=$]{$} */}
            <div>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/inventory">inventory</a>
                <a href="/login">login</a>
            </div>
        </nav>
    );
};

export default Header;