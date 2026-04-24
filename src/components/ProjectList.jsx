import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Project from './Project.jsx';

function filterProjects(projects, amt_of_projects, year, oldest_first) {
    let selected_projects = [];
    const year_collection = [];

    for (let i = 0; i < projects.length; i++) {
        if (Number(year) === projects[i]['year']) {
            year_collection.push(projects[i]);
        }
    }

    if (amt_of_projects === 0) { // all projects for that year
        selected_projects = year_collection;
    } else {
        let counter = 0;
        if (oldest_first) { // reverse projects
            for (let i = amt_of_projects - 1; i > -1; i--) {
                selected_projects.push(year_collection[i]);
                counter++;
                if (amt_of_projects === counter) {
                    break;
                }
            }
        } else { // newest selection
            for (let i = year_collection.length - amt_of_projects; i < year_collection.length; i++) {
                selected_projects.push(year_collection[i]);
                counter++;
                if (amt_of_projects === counter) {
                    break;
                }
            }
        }
    }

    return selected_projects;
}

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

function ProjectList({ amt_of_projects, year, oldest_first }){   
    const data = useStaticQuery(graphql`
        query {
            projectsJson{
                projects {
                id
                year
                title
                image_name
                alt_text
                description
                project_link
                }
            }
        }
    `);

    const projectGroups = groupProjects(
        filterProjects(
            data["projectsJson"]["projects"], 
            amt_of_projects, year, oldest_first
    ));

    return (
        <div className='column'>
            {
                projectGroups.map((project_group) => 
                    <div className="row" key={project_group[0]['id']}>
                        {
                            project_group.map((project) => 
                                <Project key={project['id']} project_id={project['id']} project_data={project}/>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default ProjectList;