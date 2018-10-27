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
            {/* More / about us links */}
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="More"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    // buttonIcon={Apps}
                    dropdownList={[
                        // TODO: replace all 'a' tags with <Link> components
                        // <Link to="/landing-page" className={classes.dropdownLink}>
                        //     About
                        // </Link>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            About Hip-Hip
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            FAQ
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Country Rankings
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            News
                        </a>,
                    ]}
                />
            </ListItem>

            {/* Find */}
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    className={classes.navLink}
                >
                    Find
                </Button>
            </ListItem>

            {/* Add */}
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Add"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    // buttonIcon={Apps}
                    dropdownList={[
                        // TODO: replace all 'a' tags with <Link> components
                        // <Link to="/landing-page" className={classes.dropdownLink}>
                        //     Home
                        // </Link>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Tournament
                        </a>,
                        <Link
                            to="/add/pickup"
                            className={classes.dropdownLink}
                        >
                            Pick-up
                        </Link>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Request
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Offering
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Business
                        </a>,
                    ]}
                />
            </ListItem>

            {/* Members */}
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    className={classes.navLink}
                >
                    Members
                </Button>
            </ListItem>

            {/* Join Us */}
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Join Us"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    // buttonIcon={Apps}
                    dropdownList={[
                        // TODO: replace all 'a' tags with <Link> components
                        // <Link to="/landing-page" className={classes.dropdownLink}>
                        //     Home
                        // </Link>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Opportunities
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Career
                        </a>,
                        <a
                            href="#" target="_blank"
                            className={classes.dropdownLink}
                        >
                            Sponsoring
                        </a>,
                    ]}
                />
            </ListItem>

            {/* Shop - eventually, like when logged in */}
            <ListItem className={classes.listItem}>
                <Button
                    color="transparent"
                    className={classes.navLink}
                >
                    Shop
                </Button>
            </ListItem>

            {/* Account details - only when logged in */}
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
