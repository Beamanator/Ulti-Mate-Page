import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import highlightStyle from "assets/jss/material-kit-react/views/homeSections/highlightStyle.jsx";

class HighlightSection extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Highlights</h2>
                        <h5 className={classes.description}>
                            Check out some of the recent highlights in the ultimate community!
                        </h5>
                    </GridItem>
                </GridContainer>
                <div>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={4}>
                            <InfoArea
                                title="WUCC"
                                description="The World Ultimate Club Championships just wrapped up. Check out some highlights here!"
                                icon={Chat}
                                iconColor="info"
                                vertical
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

export default withStyles(highlightStyle)(HighlightSection);
