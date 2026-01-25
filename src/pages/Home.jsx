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
                <h1>Hi, I'm Jenny!</h1>
                <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
                <h2>I'm currently working on...</h2>
                <p>Improving <Link to="https://github.com/jennyton88/devlogs_maker">Devlogs Maker</Link>, which you can find on my Github. I'm also working on some games, and additional software in the background. You may find updates about them on my social media.</p>
                <hr/>
                <div className='row'>
                    <div style={{display:'block', width:'50%'}}>
                        <h2 style={{display:'block'}}>Exploring subjects like...</h2>
                        <p style={{paddingLeft:"15px"}}>
                            <li>Making Games</li>
                            <li>Printmaking</li>
                            <li>Papermaking</li>
                            <li>Stamps</li>
                            <li>Digital Art</li>
                            <li>3D Modeling</li>
                            <li>Video Editing</li>
                        </p>
                    </div>
                    <div style={{display:'block', width:'50%'}}>
                        <h2>My links below!</h2>
                        <nav style={{listStyle: 'none'}}>
                            <li><Link to={'https://linktr.ee/jennydevs'}>Linktree</Link></li>
                            <li><Link to={'https://github.com/jennyton88'}><FaGithub className='logo-link'/>Github</Link></li>
                            <li><Link to={'https://jennydevs.itch.io/'}><FaItchIo className='logo-link'/>Itch.io</Link></li>
                            <li><Link to={'https://bsky.app/profile/jennydevs.bsky.social'}><FaBluesky className='logo-link'/>Bluesky</Link></li>
                            <li><Link to={'https://mastodon.gamedev.place/@jennydevs'}><FaMastodon className='logo-link'/>Mastodon</Link></li>
                            <li><Link to={'https://www.youtube.com/@jennydevs'}><FaYoutube className='logo-link'/>YouTube</Link></li>
                        </nav>
                    </div>
                </div>
                <hr/>
                <h1>Recent Projects</h1>
                <img src="/images/border.png" className='img-border'/>
                <ProjectList amt_of_projects={3} year={'2025'} oldest_first={false}/>
                <img src="/images/border.png" className='img-border'/>
            </div>
            <Footer />
        </div>
    );
}

export default Home;