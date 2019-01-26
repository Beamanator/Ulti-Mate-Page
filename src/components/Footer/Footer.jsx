/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core
import {
    List, ListItem, withStyles, Tooltip, Typography
} from "@material-ui/core";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// custom components
import Button from 'components/CustomButtons/Button.jsx';

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
    const { classes, whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="http://www.wfdf.org/"
                                className={classes.block}
                            >
                                World Flying Disc Federation
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="http://chickenonaraft.com/"
                                className={classes.block}
                            >
                                About us chickens
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="https://hencefarthing.blog/"
                                className={classes.block}
                            >
                                Blog
                            </a>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <a
                                href="#/landing-page"
                                className={classes.block}
                            >
                                Contact Us
                            </a>
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    <List className={classes.list}>
                        {/* Check us out on social media */}
                        <ListItem className={`${classes.inlineBlock} ${classes.rightSpacing}`}>
                            <Typography className={classes.block}>
                                Check us out on social media:
                            </Typography>
                        </ListItem>

                        {/* Facebook */}
                        <ListItem className={classes.inlineBlock}>
                            <Tooltip
                                id="facebook-tooltip"
                                title="Follow us on facebook"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <Button justIcon round color="transparent">
                                    <i className={classes.socialIcons + " fab fa-facebook"} />
                                </Button>
                            </Tooltip>
                        </ListItem>

                        {/* Instagram */}
                        <ListItem className={classes.inlineBlock}>
                            <Tooltip
                                id="instagram-tooltip"
                                title="Follow us on instagram"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <Button justIcon round color="transparent">
                                    <i className={classes.socialIcons + " fab fa-instagram"} />
                                </Button>
                            </Tooltip>
                        </ListItem>

                        {/* Twitter */}
                        <ListItem className={classes.inlineBlock}>
                            <Tooltip
                                id="twitter-tooltip"
                                title="Follow us on twitter"
                                placement={window.innerWidth > 959 ? "top" : "left"}
                                classes={{ tooltip: classes.tooltip }}
                            >
                                <Button justIcon round color="transparent">
                                    <i className={classes.socialIcons + " fab fa-twitter"} />
                                </Button>
                            </Tooltip>
                        </ListItem>
                    </List>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
    whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
