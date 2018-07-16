import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from './Jss';

const button = (props) => {
    const { classes } = props;

    return (
        <button className={classes.button}>
            <span className={classes.letter}></span>
        </button>
    )
}

export default withStyles(styles)(button);


