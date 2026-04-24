import React from 'react';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import ProjectList from '../components/ProjectList.jsx';


function Projects() {
    return (
        <div className='container'>
            <Topbar header_data={'Projects'}/>
            <div className='content'>
                <h1>2025</h1>
                <img className='img-border' alt="" />
                <ProjectList amt_of_projects={0} year={2025} oldest_first={false}/>
                <hr/>
                <h1>2024</h1>
                <img className='img-border' alt="" />
                <ProjectList amt_of_projects={0} year={2024} oldest_first={false}/>
                <img className='img-border' alt="" />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;