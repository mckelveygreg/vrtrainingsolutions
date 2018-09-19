import React, { Component } from 'react';
import imgWendy from './media/Wendy_512.png';
import imgVance from './media/Vance_512.png';
import imgGlimmer from './media/Glimmer.png';
import './Management.css'
import Fade from 'react-reveal';


class Management extends Component {

    render() {
        return (
					<div>
							<Fade>
	                <h2 className="section-title">Management</h2>
	                <div className="card">
	                    <h3>CEO - Wendy Morgan</h3>
											<img src={imgWendy} />
	                    <p>Wendy has served as a K-12 classroom teacher and as a Program Development Manager at the University of Oregon. While at UO, she developed two acclaimed educational technology programs; these fully online, interactive, asynchronous professional development programs were under the moniker of UO Real Solutions. Wendy’s Real Solutions work gained the attention of practitioners in the field of education technology, and requests for her help from others in the ed tech space inspired her work as a consultant in the field. Her work was recognized through the receipt of a Mozilla Gigabit award and she became a US Ignite Smart Gigabit Community Application Recipient. These awards supported the proof of concept work for Educational Equity VR, the project that was the inspiration for the formation of VR Training Solutions.</p>
	                </div>
									<div className="card">
										<h3>COO - Vance Naegle</h3>
										<img src={imgVance} />
										<p>Vance is a Co-Founder of Glimmer Technology and TechToneGraphix.  He has extensive experience with local start up companies, including Pipeworks Software which he helped get off the ground in 1999.  He is a veteran game developer with multiple shipped titles on PC, Console, Mobile and Social platforms.  If you have played Farmville, CastleVille or CityVille, you have probably seen some of his work.  Vance is an Oregon Duck alum.  He earned a BFA in Visual Design from the University of Oregon.</p>
									</div>
									<div className="card">
										<h3>Technical Partner – Glimmer Technology</h3>
										<img src={imgGlimmer} />
										<p><a href="https://www.glimmer.tech">Glimmer Technology</a> offers creative solutions to technical challenges.  We are comprised of developers from a wide range of disciplines.  We apply our game development experience to main stream content development.</p>
									</div>
								
            </Fade>
	            </div>
        )
    }
}

export default Management;