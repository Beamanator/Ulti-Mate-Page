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

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ExploreSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Let's explore!</h2>
                        <h5 className={classes.description}>
                            Check out some of the recent highlights in the ultimate community!
                        </h5>
                    </GridItem>
                </GridContainer>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4} style={{backgroundColor: 'red'}}>
                            <CustomDropdown
                                noLiPadding
                                buttonText="Dr. Frisbee Person..."
                                buttonProps={{
                                    className: classes.navLink,
                                    color: "transparent"
                                }}
                                buttonIcon={Apps}
                                dropdownList={[
                                    <span>Egypt</span>,
                                    <span>America</span>
                                ]}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                            <InfoArea
                                title="Newest WFDF recognized organization"
                                description="Just thought this title matched the icon - but icon can be changed easily. Title should be short probably"
                                icon={VerifiedUser}
                                iconColor="success"
                                vertical
                            />
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

export default withStyles(productStyle)(ExploreSection);
