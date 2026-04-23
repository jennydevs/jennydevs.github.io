import React from 'react';
import { useState } from "react";
import Project from './Project.jsx';


function groupProjects(projects_data) {
    const PROJECTS_PER_ROW = 3;
    let total_grouped_projects = [];
    let grouped_projects = [];

    const projects = projects_data;

    for (let i = projects.length - 1; i > -1; i--) {
        grouped_projects.push(projects[i]);
        if (i % PROJECTS_PER_ROW === 0) {
            total_grouped_projects.push(grouped_projects);
            grouped_projects = [];
        }
    }
    
    return total_grouped_projects;
}


function ProjectMapper({ projects_data }) {
    const [projectGroups] = useState(groupProjects(projects_data));

    return (
        <>
            {
                projectGroups.map((project_group) => 
                    <div className="row" key={project_group[0]['key']}>
                        {
                            project_group.map(
                                (proj) => 
                                <Project key={proj['key']} project_id={proj['key']} project_data={proj}/>
                            )
                        }
                    </div>
                )
            }
        </>
    );
}

export default ProjectMapper;