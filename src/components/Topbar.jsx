import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';


function Topbar({header_data}) {
    return (
        <div className='topbar'>
            <Header header_data={header_data} />
            <nav className='topbar-nav'>
                <li className='hori-top-spacer'><Link to={'/'} className='topbar-link'>Home</Link></li>
                <li className='hori-top-spacer'><Link to={'/projects'} className='topbar-link'>Projects</Link></li>
                <li className='hori-top-spacer'><Link to={'/devlogs'} className='topbar-link'>Devlogs</Link></li>
            </nav>
        </div>
    
    );
}

export default Topbar;