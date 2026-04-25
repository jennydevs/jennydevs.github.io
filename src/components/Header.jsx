import React from 'react';
import { Link } from 'gatsby';

function Header({ header_data }) {
    return (
        <header className='topbar-header'>
            <Link to='/'><img className='header-image'/></Link><h1 className='header-title'>{header_data}</h1>
        </header>
    );
}

export default Header;