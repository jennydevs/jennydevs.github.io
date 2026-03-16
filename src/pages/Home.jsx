import { Link } from 'react-router-dom';
import { FaGithub, FaItchIo, FaMastodon, FaBluesky, FaYoutube } from 'react-icons/fa6';

import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Home() {
    return (
        <div className="container">
            <Topbar header_data={'jennydevs'}/>
            <div className='content'>
                <img className='img-border'/>
                <h1>Hello there!</h1>
                <p>I like to explore digital and physical mediums that catch my interest. You'll find me learning about a variety of topics that I can utilize for an assortment of projects.</p>
                <h2>I'm currently working on...</h2>
                <p>Updating everything for the new year of 2026. I'll be making more tools and devlogs! I'm also particularly excited about a new game idea...</p>
                <hr/>
                <div className='row'>
                    <div className='half-block'>
                        <h2>Working on things like:</h2>
                        <p style={{listStyle:'none'}}>
                            <li>Digital art</li>
                            <li>Games</li>
                            <li>3D modeling</li>
                            <li>Convenient software tools</li>
                        </p>
                    </div>
                    <div className='half-block' style={{textAlign: 'center'}}>
                        <h2>Links</h2>
                        <nav style={{listStyle: 'none'}}>
                            <li><Link to={'https://jennydevs.itch.io/'}><FaItchIo className='logo-link'/>itch.io</Link></li>
                            <li><Link to={'https://github.com/jennydevs'}><FaGithub className='logo-link'/>Github</Link></li>
                            <li><Link to={'https://bsky.app/profile/jennydevs.bsky.social'}><FaBluesky className='logo-link'/>Bluesky</Link></li>
                            <li><Link to={'https://mastodon.gamedev.place/@jennydevs'}><FaMastodon className='logo-link'/>Mastodon</Link></li>
                            <li><Link to={'https://www.youtube.com/@jennydevs'}><FaYoutube className='logo-link'/>YouTube</Link></li>
                        </nav>
                    </div>
                </div>
                <hr/>
                <h1>Recent Projects</h1>
                <img className='img-border'/>
                <ProjectList amt_of_projects={3} year={'2025'} oldest_first={false}/>
                <img className='img-border'/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;