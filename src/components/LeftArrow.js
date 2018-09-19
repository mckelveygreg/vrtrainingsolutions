import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftArrow = (props) => {
    return(
        <div className="backArrow" onClick={props.goToPrevSlide}>
            <FontAwesomeIcon icon="arrow-left" size="3x" />
        </div>
    )
}

export default LeftArrow;