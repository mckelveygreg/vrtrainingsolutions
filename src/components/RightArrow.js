import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RightArrow = (props) => {
    return(
        <div className="nextArrow" onClick={props.goToNextSlide}>
            <FontAwesomeIcon icon="arrow-right" size="3x" />
        </div>
    )
}

export default RightArrow;