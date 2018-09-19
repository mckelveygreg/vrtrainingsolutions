import React, { Component } from 'react'
import Fade from 'react-reveal'
import './Board.css';
import imgKemy from './media/KJ_512.png';
import imgEwa from './media/Ewa_512.png';
import imgTony from './media/Tony_512.png';
import imgHeather from './media/Heather_512.png';
import imgJM from './media/JM_512.png';



export default class Board extends Component {
  render() {
    return (
      <div>
        <Fade>
          <h2>Board of Directors</h2>
          <div className="card">
            <h3><b>Kemy Joseph</b> – Empowering Speaker, Trainer & Coach</h3>
            <img src={imgKemy} />
            <p>Kemy Joseph has been president of U R Awesome Inc. a nonprofit focused on leadership and equity and is a current member of PeaceJam working with Nobel Peace Prize Laureates to help bring world wide attention to issues in social Justice and other global issues.  Kemy is also a national trainer for the WhyTry foundation teaching resilience for youth and adults with a focus on gender specific strengths -based interventions. This program is now in over 18,000 schools and 500 school districts in 50 states and countries worldwide. He has a BS in Communication, an MS in Brain-Based Teacher Leadership, and an EdS in Teacher Leadership.</p>
          </div>
          <div className="card">
            <h3><b>Ewa Campbell</b> – M.Ed</h3>
            <img src={imgEwa} />
            <p>Ewa Campbell is an experienced executive with a demonstrated history of working in the education and non profit management industry. She is skilled in nonprofit organizations, university and K-12 administration, teaching and training. Ewa has strong strategic planning, fundraising, grant writing, community outreach, communication, program development, event planning, management and business development skills.</p>
          </div>
          <div className="card">
            <h3><b>Tony Scurto</b> –  Superintendent Lane Education Service District</h3>
            <img src={imgTony} />
            <p>Tony is starting is 35th year in education. His career started in 1984 as a high school teacher and coach in the Antelope Valley in California.  In Oregon, he served as a school administrator at Coquille High School, Sutherlin High School and the Pleasant Hill School District. His administrative roles have included athletic director, assistant principal, principal and superintendent.  Tony received his Continuing Administrator License from the University of Oregon. He holds a Master of Arts degree in Educational Administration from California State University, Northridge and a Bachelor of Arts degree from the University of California, Santa Barbara.  He is currently serving as the Superintendent of the Lane Educational Service District.</p>
          </div>
          <div className="card">
            <h3><b>Heather McClure</b> –Associate Director and Research Assistant Professor with the Center for Equity Promotion (CEQP)</h3>
            <img src={imgHeather} />
            <p>I am a broadly cultural anthropologist with expertise in the social and cultural determinants of health and learning among marginalized populations, with a particular focus on Latino immigrant youth and families. My research uses multi-method approaches to gain insights into individual, family, and community-level influences on health and learning that can either create risk for health disparities and educational failure or promote well-being and engaged learning over the life course. I am Associate Director and Research Assistant Professor with the Center for Equity Promotion (CEQP) in the University of Oregon’s (UO) College of Education (COE).</p>
          </div>
          <div className="card">
            <h3><b>Joe maruschak</b> – Director of the RAIN Eugene Accelerator</h3>
            <img src={imgJM} />
            <p>Joe Maruschak advised many early and growth stage companies. He works directly with entrepreneurs on their business plans and products. He is a mentor at Portland-based accelerator PIEPDX, and is a founder and board member of the FertiLab Thinkubator, a privately funded biotech incubator and co-working space. He is a Strategic advisor and entrepreneur and is very active with startup companies in Games, Software, Health and Safety, Education, and Biotech. Joe is also the Chief Startup Officer and Director of the RAIN Eugene Accelerator, a program that works with high tech entrepreneurs and university researchers to launch startups. RAIN (the Regional Accelerator and Innovation Network) is a government-funded initiative to invest in the creation of hi-growth hi-tech companies in Oregon and accelerate the state’s transition from a resource-based to a knowledge-based economy. He is also the managing director Coast to Crest Fund.</p>
          </div>
        </Fade>
      </div>
    )
  }
}
