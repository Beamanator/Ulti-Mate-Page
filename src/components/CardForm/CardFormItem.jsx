import React from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
// import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import cardFormItemStyle from "assets/jss/material-kit-react/components/cardFormItemStyle.jsx";

const CardFormItem = (props) => {
    const {
        classes,
    } = props;

    return (
        <GridItem xs={6} sm={6} md={4}>
            {props.children}
        </GridItem>
    );
}

CardFormItem.propTypes = {
    groupTitle: PropTypes.string.isRequired,
};

export default withStyles(cardFormItemStyle)(CardFormItem);