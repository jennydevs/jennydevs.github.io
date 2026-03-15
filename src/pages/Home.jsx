import { Link } from 'react-router-dom';
import { FaGithub, FaItchIo, FaMastodon, FaBluesky, FaYoutube } from 'react-icons/fa6';

import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Home() {
    return (
        <div className="container">
            <Topbar header_data={'Jenny Ton'}/>
            <div className='content'>
                <img className='img-border'/>
                <h1>Hi there!</h1>
                <p>I like to explore digital and physical mediums that catch my interest. You'll find me learning about topics that I can utilize for other projects, especially things you usually wouldn't think about combining together.</p>
                <h2>I'm currently working on...</h2>
                <p>Updating everything for the new year of 2026, and making more devlogs and tools. I'll be testing out some new game ideas and working on previous ones too. I'm also experimenting with tablet weaving for my exploration in printmaking.</p>
                <hr/>
                <div className='row'>
                    <div className='half-block'>
                        <h2>Working on things like:</h2>
                        <p style={{listStyle:'none'}}>
                            <li>Developing games</li>
                            <li>Software tools</li>
                            <li>3D modeling</li>
                            <li>Digital art</li>
                            <li>Printmaking</li>
                            <li>Papermaking</li>
                        </p>
                    </div>
                    <div className='half-block' style={{textAlign: 'center'}}>
                        <h2>Links</h2>
                        <nav style={{listStyle: 'none'}}>
                            <li> <Link to={'https://jennydevs.itch.io/'}><FaItchIo className='logo-link'/>Itch</Link></li>
                            <li> <Link to={'https://github.com/jennyton88'}><FaGithub className='logo-link'/>Github</Link></li>
                            <li> <Link to={'https://bsky.app/profile/jennydevs.bsky.social'}><FaBluesky className='logo-link'/>Bluesky</Link></li>
                            <li> <Link to={'https://mastodon.gamedev.place/@jennydevs'}><FaMastodon className='logo-link'/>Mastodon</Link></li>
                            <li> <Link to={'https://www.youtube.com/@jennydevs'}><FaYoutube className='logo-link'/>YouTube</Link></li>
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