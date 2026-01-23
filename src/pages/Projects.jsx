import Topbar from '../components/Topbar.jsx';
import ProjectList from '../components/ProjectList.jsx';
import Footer from '../components/Footer.jsx';


function Projects() {
    return (
        <div className='container'>
            <Topbar header_data={'Projects'}/>
            <div className='content'>
                <h1>2025</h1>
                <img src="/images/border.png" className='img-border'/>
                <ProjectList/>
                <img src="/images/border.png" className='img-border'/>
            </div>
            <Footer />
        </div>
      );
}

export default Projects;