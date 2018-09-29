import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { InputAdornment } from "@material-ui/core";

// @material-ui/icons
import { People}  from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

// custom styles
import pickupStyle from "assets/jss/material-kit-react/views/addPages/pickupStyle.jsx";

// images
import image from "assets/img/bg7.jpg";

class AddPickup extends Component {
    render() {
        const { classes, ...rest } = this.props;

        return (
            <Fragment>
                <Header
                    color="transparent"
                    brand="Material Kit React"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <div
                    className={classes.bkgStyles}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                                <Card>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Add a Pick-up Game!</h4>
                                    </CardHeader>
                                    <p className={classes.divider}>
                                        Enter all of the data about your pickup event below!
                                    </p>
                                    <CardBody>
                                        <GridContainer >
                                            {/* title - full size always */}
                                            <GridItem xs={6} sm={6} md={12}>
                                                <CustomInput
                                                    labelText="Title / Event name..."
                                                    id="title"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </GridItem>
                                            <GridItem xs={6} sm={6} md={12}>
                                                <CustomInput
                                                    labelText="Address..."
                                                    id="address"
                                                    formControlProps={{
                                                        fullWidth: true
                                                    }}
                                                    inputProps={{
                                                        type: "text",
                                                        endAdornment: (
                                                            <InputAdornment position="end">
                                                                <People className={classes.inputIconsColor} />
                                                            </InputAdornment>
                                                        )
                                                    }}
                                                />
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        <Button simple color="primary" size="lg">
                                            Create
                                        </Button>
                                    </CardFooter>
                                        
                                </Card>
                                
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withStyles(pickupStyle)(AddPickup);