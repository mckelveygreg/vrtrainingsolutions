import React, { Component } from "react";
import "./About.css";
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade'; 
//import Reveal from 'react-reveal/Reveal';


class About extends Component {
  
  render() {
    return (
      <div id="About" className="About">
      <Fade opposite={true} >
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div>
            <h3>Mission Statement</h3>
            <p>
              VR Training Solutions develops and sponsors immersive virtual
              reality trainings of people in public authority positions in order
              to raise awareness of implicit bias and help achieve more equitable
              treatment of people from diverse ethnic backgrounds.
            </p>
          </div>
  
          <div>
            <h3>How it began...</h3>
            <p>
              VR Training Solutions – was created in 2018 after a successful grant
              funded “proof of concept” called Educational Equity VR. With funding
              from Mozilla and US Ignite, we were able to create a virtual
              classroom in which teachers could deliver their lesson plans to
              virtual student avatars. The project was completed on time and the
              teacher response was overwhelmingly positive.
            </p>
          </div>
  
          <div id="quotes">
            <div>
              {/* <h3>Teacher Quotes</h3> */}
              <blockquote>"This is an incredibly valuable tool!"</blockquote>
              <br />
              <blockquote>"It felt so real!"</blockquote>
            </div>
          </div>
  
          <div>
            <h3>Traction</h3>
            <ul>
              <li>
                Awarded grants from{" "}
                <a href="https://www.mozilla.org/en-US/">Mozilla</a> and{" "}
                <a href="https://www.us-ignite.org/">US Ignite</a> to develop the
                proof of concept project.
              </li>
  
              <li>
                Asked to present the project at the Mozilla all hands web call
                after successful completion of the proof of concept.
              </li>
  
              <li>
                We nabbed a cover of the Eugene Weekly Tech issue.
                https://www.eugeneweekly.com/2018/08/23/fighting-implicit-bias/
              </li>
  
              <li>Radio interview. Check, coming soon!</li>
  
              <li>
                Television! NBC covered the project.
                https://nbc16.com/news/local/teachers-go-through-vr-training-to-learn-how-to-better-deal-with-unruly-students
              </li>
  
              <li>
                We have been approached by a number of institutions that want to
                use our program once completed.
              </li>
  
              <li>
                Recently invited/sponsored to be in the Kauffman Accelerator.
              </li>
            </ul>
          </div>
  
          <div>
            <h3>Where we go from here</h3>
            <p>
              We are seeking funds to complete Phase 2 of the project which will
              include a number of requested feature improvements and the
              development of a follow-up app to help keep teachers engaged and
              monitor progress after the training.
            </p>
          </div>
      </Fade>
        </div>
    );
  }
}
 

export default About;
