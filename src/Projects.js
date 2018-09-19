import React, { Component } from 'react';
import Fade from 'react-reveal';
import trainers from './media/Trainers.jpg'
import ProjectsGallery from './components/ProjectsGallery';
import './Projects.css';
import SimpleModalLauncher from './components/SimpleModalLauncher';
import StyledApp from './components/StyledApp';

class Projects extends Component {


    render() {
        let urls = [
            require("./media/Class_01.jpg"),
            require("./media/Class_03.jpg"),
            require("./media/Class_05.jpg"),
            require("./media/Class_09.jpg")
        ]
        return (
            <div id='Projects'>
            <Fade>
                <div className='section-title'>
                    <h2>Projects</h2>
                </div>
                <div className="project">
                    <h3>Educational Equity Virtual Reality (EEVR) - Proof of Concept</h3>
                    <img src={trainers} width='300' alt='trainers' />
                    <p>Our proof of concept project was completed in June of 2018.  It was created to measure implicit bias in the classroom.  It featured an immersive VR classroom that could be accessed by multiple people. </p>
                </div>
                <div className="project">
                    <h3>Educational Equity Virtual Reality (EEVR) - Phase II</h3>
                    <p><em>Now in development!</em></p>
                </div>

                {/* <StyledApp /> */}
                <ProjectsGallery imageUrls={urls} /> */}
            </Fade>
            </div>
        )
    }
}

export default Projects;