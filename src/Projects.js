import React, { Component } from 'react';
import Fade from 'react-reveal';
import trainers from './media/Trainers.jpg'

class Projects extends Component {


    render() {
        return (
            <div id='Projects'>
            <Fade>
                <div className='section-title'>
                    <h2>Projects</h2>
                </div>
                <div>
                    <h3>Educational Equity Virtual Reality (EEVR) - Proof of Concept</h3>
                    <img src={trainers} width='300' alt='trainers' />
                    <p>Our proof of concept project was completed in June of 2018.  It was created to measure implicit bias in the classroom.  It featured an immersive VR classroom that could be accessed by multiple people. </p>
                </div>
            </Fade>
            </div>
        )
    }
}

export default Projects;