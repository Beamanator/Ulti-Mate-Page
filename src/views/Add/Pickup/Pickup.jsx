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
            // note: times must be '' or undefinied initially, or will hit error
            // -> https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input
            Sunday:     {on: false, time: ''},
            Monday:     {on: false, time: ''},
            Tuesday:    {on: false, time: ''},
            Wednesday:  {on: false, time: ''},
            Thursday:   {on: false, time: ''},
            Friday:     {on: false, time: ''},
            Saturday:   {on: false, time: ''},
        }
    }

    weekdayToggle = (event) => {
        // get clicked day key from click event
        let dayKey = event.target.innerText;
        
        // get old on & time
        let {
            on: wasOn, time
        } = this.state.dateTimeData[dayKey];

        // toggle on / off
        let newOn = !wasOn;

        // now set state :)
        this.setState(state => ({
            dateTimeData: {
                ...state.dateTimeData,
                [dayKey]: {on: newOn, time}
            }
        }));
    }
    handleTimeChange = dayKey => event => {
        let newTime = event.target.value;
        // set state with new time :)
        this.setState(state => ({
            dateTimeData: {
                ...state.dateTimeData,
                [dayKey]: {
                    on: state.dateTimeData[dayKey].on,
                    time: newTime
                }
            }
        }));
    }

    render() {
        const { classes, ...rest } = this.props;
        const { dateTimeData } = this.state;

        const dateTimeKeys = [
            'Sunday', 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday'
        ];

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
                                                    {dateTimeKeys.map(dayKey => (
                                                        <GridItem xs={12} sm={6} md={4} key={dayKey}
                                                            style={{marginTop: '2px', marginBottom: '2px'}}
                                                        >
                                                            <Chip
                                                                label={dayKey}
                                                                onClick={this.weekdayToggle}
                                                                color={dateTimeData[dayKey].on ? 'secondary' : 'default'}
                                                                variant={dateTimeData[dayKey].on ? 'default' : 'outlined'}
                                                            />
                                                            <TextField
                                                                disabled={!dateTimeData[dayKey].on}
                                                                type="time"
                                                                value={dateTimeData[dayKey].time}
                                                                onChange={this.handleTimeChange(dayKey)}
                                                                InputLabelProps={{ shrink: true }}
                                                                className={classes.textField}
                                                                inputProps={{
                                                                    step: 900, // 15 min
                                                                }}
                                                            />
                                                        </GridItem>
                                                    ))}
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