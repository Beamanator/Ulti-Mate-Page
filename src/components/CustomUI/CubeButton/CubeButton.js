import React from 'react';

// import { withStyles } from '@material-ui/core/styles';
import './CubeButton.css';

const button = (props) => (
    <button id="dice_wrapper">
        <div id="dice">
            <div id="top">
                <span></span>
            </div>
            <div id="front">
                <span></span>
            </div>
        </div>
    </button>
);

export default button;


