import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/icons
import { Apps, Chat, VerifiedUser, Fingerprint } from "@material-ui/icons";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown.jsx";

import exploreStyle from "assets/jss/material-kit-react/views/landingPageSections/exploreStyle.jsx";

class ExploreSection extends React.Component {
    render() {
        const { classes } = this.props;
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
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <CustomDropdown
                                // noLiPadding (no li-element padding)
                                buttonText="Country"
                                dropdownHeader="Select your country"
                                buttonProps={{
                                    className: classes.navLink,
                                    color: "transparent"
                                }}
                                dropdownList={[
                                    "Egypt",
                                    "America",
                                    "Germany",
                                    { divider: true },
                                    "Prefer not to answer"
                                ]}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12} style={{backgroundColor: 'red'}}>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={e => e.preventDefault()}
                                color="transparent"
                            >
                                Link
                            </Button>
                            <Button
                                href="#pablo"
                                className={classes.navLink}
                                onClick={e => e.preventDefault()}
                                color="transparent"
                            >
                                Link
                            </Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <InfoArea
                                title="Fingerprint"
                                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                                icon={Fingerprint}
                                iconColor="danger"
                                vertical
                            />
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(exploreStyle)(ExploreSection);
