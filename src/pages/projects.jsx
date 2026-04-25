import React from 'react';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import ProjectList from '../components/ProjectList.jsx';


function Projects() {
    return (
        <div className='container'>
            <Topbar header_data={'Projects'}/>
            <div className='content'>
                <img className='img-border' alt='' />
                <h1 style={{'textAlign': 'center'}}>2025</h1>
                <hr/>
                <ProjectList amt_of_projects={0} year={2025} oldest_first={false}/>
                <img className='img-border' alt='' />
                <h1 style={{'textAlign': 'center'}}>2024</h1>
                <hr/>
                <ProjectList amt_of_projects={0} year={2024} oldest_first={false}/>
                <img className='img-border' alt='' />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;