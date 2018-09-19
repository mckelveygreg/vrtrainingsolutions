import React from 'react';
import styled from "styled-components";

const Slide = ({ image }) => {
    const Img = styled.img`
    width: 200px,
    margin: 40,
    &:hover {
        width: 400px
    }
    `

    return (
    <div className="slide" >
        <Img src={image} alt='' />
    </div>
    )
}

export default Slide;