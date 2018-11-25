import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import cardFormStyle from "assets/jss/material-kit-react/components/cardFormStyle.jsx";

const CardForm = (props) => {
    const {
        classes,
        formTitle,
    } = props;

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10}>
                <Card>
                    <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>{formTitle}</h4>
                    </CardHeader>
                    <CardBody>
                        {"grid groups go here"}
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        {"grid action button(s) & text go here"}
                    </CardFooter>
                </Card>
            </GridItem>
        </GridContainer>
    );
}

CardForm.propTypes = {
    formTitle: PropTypes.string.isRequired,
};

export default withStyles(cardFormStyle)(CardForm);