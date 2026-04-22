import { Link } from 'react-router-dom';
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
                <p>I mainly work on developing games and custom software tools. Otherwise you'll find me working on things like digital art and printmaking in my spare time... or perhaps updating my website again.</p>
                <h2>Right now I'm currently working on...</h2>
                <p>A cute little game that will be revealed this year. You can find updates on it on my <Link to="https://bsky.app/profile/jennydevs.bsky.social">bluesky</Link>.</p>
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