import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { InputAdornment, TextField, Chip } from "@material-ui/core";

// @material-ui/icons
import { People }  from "@material-ui/icons";

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
    state = {
        // date / time data for pickup. each day has the following props:
        // -> on: weather pickup is happening this specific day
        // -> time: the date of day pickup is happening that day
        dateTimeData: {
            repetition: 'once',
            sunday:     {on: false, time: null},
            monday:     {on: false, time: null},
            tuesday:    {on: false, time: null},
            wednesday:  {on: false, time: null},
            thursday:   {on: false, time: null},
            friday:     {on: false, time: null},
            saturday:   {on: false, time: null},
        }
    }

    weekdayToggle = (event) => {
        // get clicked day key from click event
        let dayKey = event.target.innerText.toLowerCase();
        let wasOn = this.state.dateTimeData[dayKey].on;
        let newOn, newTime;

        // toggle on / off
        newOn = !wasOn;

        // if newOn, display blank date. If off, hide
        if (newOn) newTime = '--:-- --';
        else newTime = null;

        // now set state :)
        this.setState(state => ({
            dateTimeData: {
                ...state.dateTimeData,
                [dayKey]: {on: newOn, time: newTime}
            }
        }))
    }

    render() {
        const { classes, ...rest } = this.props;
        const {
            dateTimeData: {
                sunday, monday, tuesday, wednesday, thursday, friday, saturday
            },
        } = this.state;

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
                            <GridItem xs={12} sm={12} md={10}>
                                <Card>
                                    <CardHeader color="primary" className={classes.cardHeader}>
                                        <h4>Fill in details about your Pick-up Game!</h4>
                                    </CardHeader>
                                    <CardBody>
                                        {/* event title, organized by, gmaps, city/neighborhood */}
                                        <GridContainer >
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Name / Location
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomInput
                                                            labelText="Title / Event name..."
                                                            id="title"
                                                            formControlProps={{ fullWidth: true }}
                                                            inputProps={{ type: "text" }}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomInput
                                                            labelText="Organized by..."
                                                            id="organizer"
                                                            formControlProps={{ fullWidth: true }}
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
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomInput
                                                            labelText="Gmaps Link..."
                                                            id="gmaps_link"
                                                            formControlProps={{ fullWidth: true }}
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
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomInput
                                                            labelText="City / Neighborhood"
                                                            id="city_neighborhood"
                                                            formControlProps={{ fullWidth: true }}
                                                            inputProps={{ type: "text" }}
                                                        />
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>

                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Date / time */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Date / Time
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={12} sm={6} md={4}>
                                                        <Chip
                                                            label="Sunday"
                                                            onClick={this.weekdayToggle}
                                                            className={classes.chipSpacing}
                                                            color={sunday.on ? 'secondary' : 'default'}
                                                            variant={sunday.on ? 'default' : 'outlined'}
                                                            />
                                                        <Chip
                                                            label="Monday"
                                                            onClick={this.weekdayToggle}
                                                            className={classes.chipSpacing}
                                                            color={monday.on ? 'secondary' : 'default'}
                                                            variant={monday.on ? 'default' : 'outlined'}
                                                        />
                                                        <Chip
                                                            label="Tuesday"
                                                            onClick={this.weekdayToggle}
                                                            className={classes.chipSpacing}
                                                            color={tuesday.on ? 'secondary' : 'default'}
                                                            variant={tuesday.on ? 'default' : 'outlined'}
                                                        />
                                                        <TextField
                                                            // label="Game Time"
                                                            // defaultValue="06:00"
                                                            // disabled
                                                            id="pickup_time_sunday"
                                                            type="time"
                                                            InputLabelProps={{ shrink: true }}
                                                            className={classes.textField}
                                                            inputProps={{
                                                                step: 900, // 15 min
                                                            }}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <Chip
                                                            label="Sunday"
                                                            className={classes.chipSpacing}
                                                            onClick={this.weekdayToggle}
                                                            onDelete={this.weekdayDeleted}
                                                        />
                                                        <Chip
                                                            label="Monday"
                                                            className={classes.chipSpacing}
                                                            onClick={this.weekdayToggle}
                                                            onDelete={this.weekdayDeleted}
                                                        />
                                                        {/* Tuesday, weds, ... */}
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <TextField
                                                            label="Game Time"
                                                            id="pickup_time"
                                                            type="time"
                                                            defaultValue="06:00"
                                                            InputLabelProps={{ shrink: true }}
                                                            className={classes.textField}
                                                            inputProps={{
                                                                step: 1500, // 15 min
                                                            }}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <Chip
                                                            label="Once"
                                                            className={classes.chipSpacing}
                                                            onClick={this.weekdayToggle}
                                                            onDelete={this.weekdayDeleted}
                                                        />
                                                        <Chip
                                                            label="Weekly"
                                                            className={classes.chipSpacing}
                                                            onClick={this.weekdayToggle}
                                                            onDelete={this.weekdayDeleted}
                                                        />
                                                        {/* bi-weekly, monthly, etc */}
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>

                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Game details */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Game Details
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Gender(s)
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Competitiveness (serious, fun, noobs)
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Max # of players (input)
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Fees?
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Rules (WFDF, custom, goaltimate, beach, etc)
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>

                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Field details */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Field Details
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Surface type (grass, turf, indoor, sand)
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Indoor vs Outdoor
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Field size (full, half)?
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Signup needed?
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>

                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Facilities details */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Facility Details
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Free toilets? Y/N
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Showers available? Y/N
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Changing rooms available? Y/N
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Free drinking water? Y/N
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Parking available? Y/N
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Lockers available? Y/N
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Who is allowed in? (players only, everyone)
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>
                                        
                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Other */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Facility Details
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        Languages Spoken
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>
                                    </CardBody>
                                    <CardFooter className={classes.cardFooter}>
                                        {/* TODO: ADD + ICON HERE */}
                                        <Button color="primary" size="lg">
                                            Create Pickup [+ icon]
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