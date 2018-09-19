import React, { Component } from 'react'
import './News.css';
import Fade from 'react-reveal';

export default class News extends Component {
  render() {
    return (
      <div id="news">
        <Fade>
          <h2 className="section-title">Latest News</h2>
          <div className="newsCard">
            <h3>Invited to the Kauffman Accelerator!</h3>
            <h4>by Vance Naegle | Sep 10, 2018 | Latest News</h4>
            <p>We are excited to announce that our very own Wendy Morgan has been invited to participate in the Kauffman Accelerator.  This is a huge honor for us and we couldn’t be happier. Check out all the good that the Kauffman Foundation does! <a href="https://www.kauffman.org/">https://www.kauffman.org/</a>...</p>
          </div>
        </Fade>
      </div>
    )
  }
}
