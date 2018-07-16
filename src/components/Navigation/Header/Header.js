import React from 'react';

import CubeButton from '../../CustomUI/CubeButton/CubeButton';

import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography
} from '@material-ui/core';
// icon components!
import MenuIcon from '@material-ui/icons/Menu';

// TODO: add jss styles?

const header = props => {

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="headline"
                    color="inherit"
                    style={{flex: 1}}
                >
                    Hip Hip!
                </Typography>
                <Button color="inherit">Login</Button>
                <CubeButton />
            </Toolbar>
        </AppBar>
    )
}

export default header;
