function Header({ header_data }) {
    return (
        <header className='topbar-header'>
            <h1>{header_data}</h1>
        </header>
    );
}

export default Header;