import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from './Jss';

const button = (props) => {
    const { classes } = props;

    return (
        <button className={classes.diceWrapper}>
            <div className={classes.dice}>
                <div className={classes.top}>
                    <span
                        className={`${classes.face} ${classes.topFace}`}></span>
                </div>
                <div className={classes.front}>
                    <span
                        className={classes.face}></span>
                </div>
            </div>
        </button>
    )
}

export default withStyles(styles)(button);


