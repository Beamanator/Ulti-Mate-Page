import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// import { Apps, Chat, VerifiedUser, Fingerprint } from "@material-ui/icons";
// @material-ui/core components
import { Hidden, ButtonBase, Typography } from '@material-ui/core';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown.jsx";

import exploreStyle from "assets/jss/material-kit-react/views/homeSections/exploreStyle.jsx";

// images for player / volunteer / fan picker
const images = [{
        url: require('assets/img/picker/HipHip_player.jpg'),
        title: 'Player', searchType: 'player',
        width: '40%',
    },
    {
        url: require('assets/img/picker/HipHip_volunteer.jpg'),
        title: 'Volunteer', searchType: 'volunteer',
        width: '30%',
    },
    {
        url: require('assets/img/picker/HipHip_fan.jpg'),
        title: 'Fan', searchType: 'fan',
        width: '30%',
    }]

class ExploreSection extends Component {
    getProximityClasses = (thisProximity) => {
        // NOTE: don't change color or background color here! For those, look in
        // -> buttonStyle.jsx
        const { classes, proximity } = this.props;
        let outputClasses = [classes.outlinedButton];
        // if 'thisProximity' is the same as the proximity prop, add new class
        if (thisProximity === proximity) {
            outputClasses.push(classes.outlinedSelectedButton);
        }
        // join classes with a space ' ' character
        return outputClasses.join(' ');
    }

    render() {
        const {
            proximity, onChangeProximity,
            searchType, onChangeSearchType,
            onSearchClicked,
            classes // from withStypes
        } = this.props;

        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Let's explore!</h2>
                        <h5 className={classes.description}>
                            Weather you're searching for events near you or around the world,
                            Hip Hip will find you some ultimate! Fill out the fields below
                            so we can help narrow down which events you may be interested in!
                        </h5>
                    </GridItem>
                </GridContainer>
                <div className={classes.greyBackground}>
                    <GridContainer justify="center">
                        <GridItem
                            xs={12} sm={12} md={12}
                            className={classes.dropdownListCenter}
                        >
                            <h3 className={classes.title}>I live in...</h3>
                            <CustomDropdown
                                // noLiPadding (no li-element padding)
                                buttonText="Country"
                                dropdownHeader="Select your country"
                                buttonProps={{
                                    // className: classes.navLink,
                                    color: "primary"
                                }}
                                
                                dropdownList={[
                                    "Egypt",
                                    "America",
                                    "Germany",
                                    { divider: true },
                                    "Prefer not to answer"
                                ]}
                            />
                            <h3 className={classes.title}>I'm looking...</h3>
                        </GridItem>
                        <GridItem
                            xs={12} sm={12} md={12} style={{backgroundColor: '#ab003c'}}
                        >
                            <GridContainer className={classes.extraBottomMargin}>
                                <Hidden smDown>
                                    <GridItem md={1}></GridItem>
                                </Hidden>
                                <GridItem xs={12} sm={6} md={5}>
                                    <h3>Across the world?</h3>
                                    <Button
                                        // href="#pablo"
                                        className={this.getProximityClasses('global')}
                                        onClick={() => onChangeProximity('global')}
                                        color={proximity === 'global' ? 'white' : 'transparent'}
                                        size="lg"
                                    >
                                        Go Global
                                    </Button>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={5}>
                                    <h3>Near your home?</h3>
                                    <Button
                                        // href="#pablo"
                                        className={this.getProximityClasses('local')}
                                        onClick={() => onChangeProximity('local')}
                                        color={proximity === 'local' ? 'white' : 'transparent'}
                                        size="lg"
                                    >
                                        Go Local
                                    </Button>
                                </GridItem>
                                <Hidden smDown>
                                    <GridItem md={1}></GridItem>
                                </Hidden>
                            </GridContainer>
                        </GridItem>

                        {/* I'm a... */}
                        <GridItem>
                            <h3 className={classes.title}>I'm a...</h3>
                        </GridItem>
                    </GridContainer>
                </div>
                <div className={classes.root}>
                    {images.map(image => (
                        <ButtonBase
                            focusRipple
                            key={image.title}
                            className={
                                classes.image + (
                                    image.searchType === searchType
                                        ? ' ' + classes.imageSelected
                                        : ''
                                )
                            }
                            focusVisibleClassName={classes.focusVisible}
                            style={{
                                width: image.width,
                            }}
                            onClick={() => onChangeSearchType(image.searchType)}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subheading"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    {/* imageMarked = little line below the title */}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    ))}
                </div>
                <div className={classes.greyBackground}>
                    <Button color="primary" onClick={onSearchClicked}>
                        Search!
                    </Button>
                </div>
            </div>
        );
    }
}

export default withStyles(exploreStyle)(ExploreSection);
