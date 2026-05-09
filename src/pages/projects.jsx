import React from 'react';
import { graphql } from 'gatsby';
import Topbar from '../components/Topbar.jsx';
import Footer from '../components/Footer.jsx';
import ProjectList from '../components/ProjectList.jsx';


function Projects({ data }) {
    return (
        <div className='container'>
            <Topbar header_data={'Projects'}/>
            <div className='content'>
                <img className='img-border' alt='' />
                <h1 className='outlined-header' style={{'textAlign': 'center'}}>2025</h1>
                <hr/>
                <ProjectList image_data={data} amt_of_projects={0} year={2025} oldest_first={false}/>
                <img className='img-border' alt='' />
                <h1 className='outlined-header' style={{'textAlign': 'center'}}>2024</h1>
                <hr/>
                <ProjectList image_data={data} amt_of_projects={0} year={2024} oldest_first={false}/>
                <img className='img-border' alt='' />
            </div>
            <Footer />
        </div>
    );
}

export default Projects;

export const Head = () => <title>Projects</title>;

export const projectQuery = graphql`
  query{
	allFile(filter:{sourceInstanceName: {eq:"project_images"}}){
    edges{
      node{
        childImageSharp{
          gatsbyImageData(layout: FULL_WIDTH)
        }
        base
      }
    }
  }
}
`;
