/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";


function Project({ project_data }) {
    const IMG_PATH = "/data/projects/images/";
    const [project] = useState(project_data);
    
    return (
        <div className="centered-project-box">
            <img src={`${IMG_PATH}${project.img_name}`} alt={project.img_alt} style={{objectFit:'contain', borderRadius:'3px 3px 0px 0px'}}/>
            <div style={{margin:'0', padding:'0'}}>
                <Link to={project.link}><h4 style={{display:'inline-block'}}>{project.title}</h4></Link>
            </div>
            <p style={{margin:'0', padding:'0 5px 5px 5px'}}>{project.description}</p>
        </div>
    );
}

export default Project;