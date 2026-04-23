import * as React from 'react';

function Header({ header_data }) {
    return (
        <header className='topbar-header'>
            <img className='header-image'/><h1 className='header-title'>{header_data}</h1>
        </header>
    );
}

export default Header;