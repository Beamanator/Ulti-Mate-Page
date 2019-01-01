import React, { Fragment } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import cardFormGroupStyle from "assets/jss/material-kit-react/components/cardFormGroupStyle.jsx";

const CardFormGroup = (props) => {
    const {
        classes,
        groupTitle,
        noEndSpacer,
        noMargin, // sets inner container's -15px margin offset to 0
    } = props;

    return (
        <Fragment>
            <GridContainer>
                <GridItem xs={2} className={classes.groupLabel}>
                    {groupTitle}
                </GridItem>
                <GridItem xs={10} className={classes.groupDataBorder}>
                    {/* individual CardFormItems go inside this container */}
                    <GridContainer className={noMargin ? classes.noMargin : null}>
                        {props.children}
                    </GridContainer>
                </GridItem>
            </GridContainer>
            {/* don't add end spacer if prop is set */}
            {noEndSpacer ? null : <p className={classes.divider}></p>}
        </Fragment>
    );
}

CardFormGroup.propTypes = {
    groupTitle: PropTypes.string.isRequired,
    noEndSpacer: PropTypes.bool,
};

export default withStyles(cardFormGroupStyle)(CardFormGroup);