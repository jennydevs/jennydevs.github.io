import React from 'react';

function Project({ project_data }) {
    const project = project_data;
    
    return (
        <div className='centered-project-box'>
            <img src={project.image_file} alt={project.alt_text} style={{objectFit:'contain', borderRadius:'3px 3px 0px 0px'}}/>
            <div style={{margin:'0', padding:'0'}}>
                <a href={project.link}><h4 style={{display:'inline-block'}}>{project.title}</h4></a>
            </div>
            <p style={{margin:'0', padding:'0 5px 5px 5px'}}>{project.description}</p>
        </div>
    );
}

export default Project;