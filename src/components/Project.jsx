/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";


function Project({ project_data }) {
    const [project] = useState({
        title: project_data[1],
        img_name: project_data[2],
        img_alt: project_data[3],
        description: project_data[4],
        link: project_data[5],
    });
    
    return (
        <div className="centered-project-box">
            <img src={`/images/${project.img_name}`} alt={project.img_alt} style={{objectFit:'contain', borderRadius:'3px 3px 0px 0px'}}/>
            <div style={{padding:'0'}}>
                <Link to={project.link}><h4>{project.title}</h4></Link>
            </div>
            <p style={{margin:'0', padding:'0 5px 5px 5px'}}>{project.description}</p>
        </div>
    );
}

export default Project;