/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
    List, ListItem,
    Tooltip,
    Typography
} from "@material-ui/core";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Warning from "components/Typography/Warning.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
    const { classes } = props;
    return (
        <List className={classes.list}>
            {/* Custom button */}
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    href="https://www.youtube.com/channel/UCAOZsX0dTOWeu0Jb7vcGUtA"
                    target="_blank"
                    className={classes.navLink}
                >
                    Check our YouTube
                </Button>
            </ListItem>

            {/* Twitter */}
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-twitter"
                    title="Follow us on twitter"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://twitter.com/FlyDiscInvasion"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-twitter"} />
                    </Button>
                </Tooltip>
            </ListItem>

            {/* Facebook */}
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-facebook"
                    title="Follow us on facebook"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.facebook.com/FlyingDiscInvasion/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-facebook"} />
                    </Button>
                </Tooltip>
            </ListItem>

            {/* Instagram */}
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="instagram-tooltip"
                    title="Follow us on instagram"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                >
                    <Button
                        color="transparent"
                        href="https://www.instagram.com/flying.disc.invasion/"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <i className={classes.socialIcons + " fab fa-instagram"} />
                    </Button>
                </Tooltip>
            </ListItem>

            {/* Custom dropdown */}
            {/* TODO: show this only when logged in? */}
            {/* <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Dr. Frisbee Person..."
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/landing-page" className={classes.dropdownLink}>
                            Home
                        </Link>,
                        <a
                            href="#"
                            target="_blank"
                            className={classes.dropdownLink}
                        >
                            Logout
                        </a>
                    ]}
                />
            </ListItem> */}
            {/* Log in / Sign up buttons */}
            <ListItem className={classes.listItem}>
                <Button
                    simple
                    color="transparent"
                    className={classes.navLink}
                >
                    Log In
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Typography
                    color="warning"
                    // TODO: put this in a stylesheet
                    style={{margin: '15px 10px', color: '#ff9800'}}
                >
                    <span>or</span>
                </Typography>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    simple
                    color="transparent"
                    className={classes.navLink}
                >
                    Sign Up
                </Button>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
