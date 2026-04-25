import React from 'react';
import Topbar from '../components/Topbar';
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import '../styles.css';

function Home() {
    return (
        <div className='container'>
            <Topbar header_data={'jennydevs'}/>
            <div className='content'>
                <img className='img-border' alt='' />
                <h2 className='outlined-header'>Hello there!</h2>
                <p>I'm Jenny, I mainly work on developing games and custom software tools. Otherwise you'll find me working on things like digital art and printmaking in my spare time... or perhaps updating my website again.</p>
                <h2>Right now I'm currently working on...</h2>
                <p>A cute little game that will be revealed this year. You can find updates on it on my <a href='https://bsky.app/profile/jennydevs.bsky.social'>bluesky</a>.</p>
                <img className='img-border' alt='' />
                <h1 className='outlined-header' style={{'textAlign': 'center'}}>Recent Projects</h1>
                <hr />
                <ProjectList amt_of_projects={3} year={2025} oldest_first={false}/>
                <img className='img-border' alt='' />
            </div>
            <Footer />
        </div>
    );
}

export default Home;