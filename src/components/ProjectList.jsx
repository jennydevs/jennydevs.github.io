import React from 'react';
import { useState, useEffect } from 'react';
import ProjectMapper from './ProjectMapper.jsx';

function separateProjects(project_list) {
    let projects = [];
    let single_project = {};
    const DATA_LINES = 7;

    for (let i = 0; i < project_list.length / DATA_LINES; i++) {
        let offset = DATA_LINES * i;
        single_project['key'] = project_list[0 + offset];
        single_project['year'] = project_list[1 + offset];
        single_project['title'] = project_list[2 + offset];
        single_project['img_name'] = project_list[3 + offset];
        single_project['img_alt'] = project_list[4 + offset];
        single_project['description'] = project_list[5 + offset];
        single_project['link'] = project_list[6 + offset];

        projects.push(single_project);
        single_project = {};
    }
    
    return projects;
}

function filterProjects(projects, amt_of_projects, year, oldest_first) {
    let selected_projects = [];
    const year_collection = [];
    let same_year = false;

    for (let i = 0; i < projects.length; i++) {
        if (year === projects[i]['year']) {
            same_year = true;
            year_collection.push(projects[i]);
        } else if (same_year && year !== projects[i]['year']) {
            break;
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

function ProjectList({amt_of_projects, year, oldest_first}) {
    const PROJECTS_PATH = "/data/projects/projects_info.txt";
    const [projectInfo, setProjectInfo] = useState([]);
    
    useEffect(() => {
        async function getProjectsInfo() {
            await fetch(PROJECTS_PATH)
            .then((response)=> {
                return response.text();
            })
            .then((project_list) => {
                let projects = separateProjects(project_list.split("\n"));
                setProjectInfo(filterProjects(projects, amt_of_projects, year, oldest_first));
            })
            .catch((error) => {
                console.error(error);
            });
        }

        getProjectsInfo();
    }, []);

    return (
        <div className='column'>
            {
                projectInfo.length === 0 ? 
                <p className='centered-box'>Loading...</p> : 
                <ProjectMapper projects_data={ projectInfo }/>
            }
        </div>
      );
}

export default ProjectList;