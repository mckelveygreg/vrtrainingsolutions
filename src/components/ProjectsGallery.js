import React, { Component } from "react";
import Slide from "./Slide";
// import LeftArrow from "./LeftArrow";
// import RightArrow from "./RightArrow";
import styled from 'styled-components';
import Lightbox from 'react-images';

class ProjectsGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: urls,
      currentIndex: 0,
      translateValue: 0
		};
		
		this.goToNextSlide = this.goToNextSlide.bind(this);
		this.goToPrevSlide = this.goToPrevSlide.bind(this);
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {
		// if at end of show, reset
		if(this.state.currentIndex === this.state.images.length - 1) {
			return this.setState({
				currentIndex: 0,
				translateValue: 0
			})
		}
		
		this.setState(prevState => ({
			currentIndex: prevState.currentIndex + 1,
			translateValue: prevState.translateValue + -(this.slideWidth())
    }));
	};
	
	slideWidth = () => {
		return document.querySelector('.slide').clientWidth
	}

	imgZoom = () => {

	}

  render() {
		const imgStyle = {
			width: "200px",
			margin: 15,
			"&:hover": {
				width: "400px"
			}
		}
		const ImgWrapper = styled.img`
    height: 200px;
    margin: 40;
    &:hover {
        height: 400px
    }
    `
    return (
      <div className="ProjectsGallery">
        
				{/* <Lightbox 
				images={[{src: 'http://vrtrainingsolutions.net/wp-content/uploads/2018/09/Class_03.jpg'}, {src: urls[1] } ] }
				isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox} />	 */}
					
					{this.state.images.map((image, i) => {
	          return <img key={i} src={image} alt="" />;
	        })}
     
      </div>
    );
  }
}

const LIGHTBOX_IMAGE_SET = [
	{
		src: require("../media/Class_01.jpg"),
		srcSet: [require("../media/Class_03.jpg"),
		require("../media/Class_05.jpg"),
		require("../media/Class_09.jpg")]
	}
]

let urls = [
  require("../media/Class_01.jpg"),
  require("../media/Class_03.jpg"),
  require("../media/Class_05.jpg"),
  require("../media/Class_09.jpg")
];
let imageNames = [
  "media/Class_01.jpg",
  "media/Class_03.jpg",
  "media/Class_05.jpg",
  "media/Class_09.jpg"
];

export default ProjectsGallery;
