import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ImgLogo from './ImgLogo.jsx';


function Topbar({header_data}) {
    return (
        <div className='topbar'>
            <Header header_data={header_data} />
            <div className='topbar-links'>
                <nav>
                    <ul className='topbar-link-list topbar-social-link-list'>
                        <li className='topbar-link-holder'>
                            <Link to={'https://jennydevs.itch.io/'}>
                                <ImgLogo logo_name={"itch"} className='logo-link' />
                            </Link>
                        </li>
                        <li className='topbar-link-holder'>
                            <Link to={'https://github.com/jennydevs'}>
                                <ImgLogo logo_name={"github"} className='logo-link'/>
                            </Link>
                        </li>
                        <li className='topbar-link-holder'>
                            <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}>
                                <ImgLogo logo_name={"bluesky"} className='logo-link'/>
                            </Link>
                        </li>
                        <li className='topbar-link-holder'>
                            <Link to={'https://mastodon.gamedev.place/@jennydevs'}>
                                <ImgLogo logo_name={"mastodon"} className='logo-link'/>
                            </Link>
                        </li>
                        <li className='topbar-link-holder'>
                            <Link to={'https://www.youtube.com/@jennydevs'}>
                                <ImgLogo logo_name={"youtube"} className='logo-link'/>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className='topbar-link-list'>
                        <li className='topbar-link-holder'>
                            <Link to={'/'} className='topbar-link'>Home</Link>
                            <img className='topbar-link-spacer'/>
                        </li>
                        <li className='topbar-link-holder'>
                            <Link to={'/projects'} className='topbar-link'>Projects</Link>
                            <img className='topbar-link-spacer'/>
                        </li>
                        <li className='topbar-link-holder'>
                            <Link to={'/devlogs'} className='topbar-link'>Devlogs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Topbar;