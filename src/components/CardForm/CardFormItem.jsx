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
        size,
    } = props;

    return (
        <GridItem {...size}>
            {props.children}
        </GridItem>
    );
}

CardFormItem.defaultProps = {
    size: {'xs': 6, 'sm': 6, 'md': 4},
};

CardFormItem.propTypes = {
    groupTitle: PropTypes.string.isRequired,
    // https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
    size: PropTypes.objectOf(function(propValue, key, componentName, location, propFullName) {
        // These sizes are the only keys that should be added to this obj
        let allowedKeys = ['xs', 'sm', 'md', 'lg', 'xl'];
        // Check that all keys are allowed
        if (!allowedKeys.includes(key)) {
            return new Error(
                `Invalid prop <${propFullName}> supplied to <${componentName}>. ` +
                `Key <${key}> not allowed. Validation failed.`
            );
        }
        // Check that all propValues are Integers
        if (!Number.isInteger(propValue[key])) {
            return new Error(
                `Invalid prop <${propFullName}> supplied to <${componentName}>. ` +
                `Value <${propValue[key]}> not an Integer. Validation failed.`
            );
        }
    }),
};

export default withStyles(cardFormItemStyle)(CardFormItem);