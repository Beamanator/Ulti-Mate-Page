import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Chip,
    FormGroup, FormControlLabel,
    Switch,
    InputAdornment, TextField,
} from "@material-ui/core";

// @material-ui/icons
import { People }  from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

// custom styles
import pickupStyle from "assets/jss/material-kit-react/views/addPages/pickupStyle.jsx";

// images
import image from "assets/img/bg7.jpg";

const dateTimeKeys = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];
const repeatOptions = [
    {label: 'Once', key: 'once'},
    {label: 'Weekly', key: 'weekly'},
    {label: 'Semi-Monthly', key: 'semi_monthly'},
    {label: 'Monthly', key: 'monthly'},
    {label: 'Once per season', key: 'once_per_season'},
    {label: 'Yearly', key: 'yearly'}
];
const facilityOptions = [
    ["Changing Rooms?", "changingRooms"],
    ["Toilets at facility?", "toilets"],
    ["Showers at facility?", "showers"],
    ["Free drinking water?", "water"],
    ["Parking?", "parking"],
    ["Lockers available?", "lockers"],
    ["Facility is outdoors?", "outside"],
    ["Fees to get in?", "fees"],
    ["Anyone can play?", "everyoneInvited"]
];

class AddPickup extends Component {
    state = {
        // date / time data for pickup. each day has the following props:
        // -> on: weather pickup is happening this specific day
        // -> time: the date of day pickup is happening that day
        dateTimeData: {
            repeatType: 'once',
            // note: times must be '' or undefinied initially, or will hit error
            // -> https://stackoverflow.com/questions/37427508/react-changing-an-uncontrolled-input
            Sunday:     {on: false, time: ''},
            Monday:     {on: false, time: ''},
            Tuesday:    {on: false, time: ''},
            Wednesday:  {on: false, time: ''},
            Thursday:   {on: false, time: ''},
            Friday:     {on: false, time: ''},
            Saturday:   {on: false, time: ''},
        },
        facilityData: {
            changingRooms: false,
            everyoneInvited: false,
            fees: false,
            outside: false,
            parking: false,
            showers: false,
            toilets: false,
            lockers: false,
            water: false,
        }
    }

    toggleFacility = setting => event => {
        let isChecked = event.target.checked;
        // update state
        this.setState(state => ({
            facilityData: {
                ...state.facilityData,
                [setting]: isChecked,
            }
        }))
    }
    repeatToggle = repeatType => event => {
        this.setState(state => ({
            dateTimeData: {
                ...state.dateTimeData,
                repeatType: repeatType
            }
        }));
    }
    weekdayToggle = event => {
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
        const {
            dateTimeData, dateTimeData: { repeatType },
            facilityData
        } = this.state;

        return (
            <Fragment>
                <Header
                    color="transparent"
                    brand="Hip Hip"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 100,
                        color: "white"
                    }}
                    {...rest}
                />
                <div
                    className={classes.bkgStyles}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        backgroundAttachment: 'fixed',
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
                                                            labelText="Organized by who..."
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
                                                            labelText="Gmaps Link"
                                                            id="gmaps_link"
                                                            formControlProps={{ fullWidth: true }}
                                                            inputProps={{ type: "text" }}
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
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Country"
                                                            dropdownHeader="In which country?"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Somehow", "Get list", "Of countries", "Here"
                                                            ]}
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
                                                            className={classes.gridVerticalSpacing}
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
                                                </GridContainer>
                                                <GridContainer>
                                                    <GridItem xs={12} sm={3} md={2}
                                                        className={classes.gridBothSpacing}
                                                    >
                                                        How often?
                                                    </GridItem>
                                                    <GridItem xs={12} sm={9} md={10}
                                                        className={classes.gridVerticalSpacing}
                                                    >
                                                        {repeatOptions.map(({label, key}) =>
                                                            <Chip
                                                                key={key}
                                                                label={label}
                                                                onClick={this.repeatToggle(key)}
                                                                className={classes.chipSpacing}
                                                                color={key === repeatType ? 'secondary' : 'default'}
                                                                variant={key === repeatType ? 'default' : 'outlined'}
                                                            />
                                                        )}
                                                    </GridItem>
                                                </GridContainer>
                                            </GridItem>
                                        </GridContainer>

                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Game & field details */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Game / Field Details
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Gender"
                                                            dropdownHeader="Who is invited?"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Mixed", "Men only", "Females only"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Competition level"
                                                            dropdownHeader="How serious are the games?"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Super serious", "Casual but competitive",
                                                                "Fun, not serious", "Mostly beginners"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Which rule-set"
                                                            dropdownHeader="Which rules are used?"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Anything goes", "Beach (BULA)", "Custom",
                                                                "Goaltimate", "USA Ultimate", "WFDF"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Average # of players"
                                                            dropdownHeader="How many players show up usually?"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "0-10", "10-20", "20-30", "30+"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Surface type"
                                                            dropdownHeader="The field is made of..."
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Real grass", "Astroturf", "Sand", "Asphalt",
                                                                "Wood", "... other?"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Field size"
                                                            dropdownHeader="Approximate field size"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Full field (37m x 110m)",
                                                                "Beach field (25m x 75m)",
                                                                "5v5 football field (15m x 30m)"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} sm={6} md={4}>
                                                        <CustomDropdown
                                                            buttonText="Signup required?"
                                                            dropdownHeader="Player needs to fill a form before coming?"
                                                            buttonProps={{
                                                                color: "transparent",
                                                                fullWidth: true
                                                            }}
                                                            dropdownList={[
                                                                { divider: true },
                                                                "Yes (add signup method!)", "Optional", "No"
                                                            ]}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} xm={6} md={4}>
                                                        <CustomInput
                                                            labelText="Signup link..."
                                                            id="signup_link"
                                                            formControlProps={{ fullWidth: true }}
                                                            inputProps={{ type: "text" }}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={6} xm={6} md={4}>
                                                        <CustomInput
                                                            labelText="Contact person..."
                                                            id="contact_person"
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
                                                    <GridItem xs={6} xm={6} md={4}>
                                                        <CustomInput
                                                            labelText="Contact phone #..."
                                                            id="contact_phone"
                                                            formControlProps={{ fullWidth: true }}
                                                            inputProps={{ type: "text" }}
                                                        />
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
                                                <FormGroup row>
                                                    {facilityOptions.map(([label, key]) => (
                                                        <FormControlLabel
                                                            key={key}
                                                            className={classNames(
                                                                classes.switchControlBorder,
                                                                classes.switchControlSpacing
                                                            )}
                                                            control = {
                                                                <Switch
                                                                    checked={facilityData[key]}
                                                                    onChange={this.toggleFacility(key)}
                                                                    value={key}
                                                                />
                                                            }
                                                            label={label}
                                                        />
                                                    ))}
                                                </FormGroup>
                                            </GridItem>
                                        </GridContainer>
                                        
                                        {/* simple spacer for field groups */}
                                        <p className={classes.divider}></p>

                                        {/* Other */}
                                        <GridContainer>
                                            <GridItem xs={2} className={classes.groupLabel}>
                                                Other Details
                                            </GridItem>
                                            <GridItem xs={10} className={classes.groupDataBorder}>
                                                <GridContainer>
                                                    <GridItem xs={12}>
                                                        <CustomInput
                                                            labelText="Language(s) spoken..."
                                                            id="languages"
                                                            formControlProps={{ fullWidth: true }}
                                                            inputProps={{ type: "text" }}
                                                        />
                                                    </GridItem>
                                                    <GridItem xs={12}>
                                                        <TextField
                                                            // id="outlined-multiline-static"
                                                            label="Extra Notes"
                                                            multiline
                                                            fullWidth
                                                            placeholder="Example: Bring your ID and $5 for field fees..."
                                                            rows="4"
                                                            className={classes.textField}
                                                            // margin="normal"
                                                            variant="outlined"
                                                        />
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
                    <Footer />
                </div>
            </Fragment>
        )
    }
}

export default withStyles(pickupStyle)(AddPickup);