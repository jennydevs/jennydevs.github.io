import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Projects() {
    return (
        <div className='container'>
            <Topbar header_data={'Projects'}/>
            <div className='content'>
                <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
                <ProjectList/>
                <img src="/images/border.png" width="100%" height="100%" className='img-border'/>
            </div>
            <Footer />
        </div>
      );
}

export default Projects;