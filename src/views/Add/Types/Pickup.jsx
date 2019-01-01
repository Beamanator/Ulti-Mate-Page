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
    Tooltip,
} from "@material-ui/core";

// @material-ui/icons
import { People }  from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";
import CardForm from "components/CardForm/CardForm.jsx";
import CardFormGroup from "components/CardForm/CardFormGroup.jsx";
import CardFormItem from "components/CardForm/CardFormItem.jsx";
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
import pickupStyle from "assets/jss/material-kit-react/views/addTypes/pickupStyle.jsx";

// images
import image from "assets/img/bg7.jpg";

// consts
const CARD_FORM_TITLE = "Fill in details about your Pick-up Game!";

// Note: order of items determines order in which they display
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
    ["Lockers available?", "lockers"],
    ["Toilets at facility?", "toilets"],
    ["Free drinking water?", "water"],
    ["Parking available?", "parking"],
    ["Showers at facility?", "showers"],
    ["Facility is outdoors?", "outside"],
    ["Anyone can play?", "everyoneInvited"],
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
            // fees: false,
            outside: false,
            parking: false,
            showers: false,
            toilets: false,
            lockers: false,
            water: false,
        },
        feeData: {}
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

        return (<Fragment>
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
                    <CardForm formTitle={CARD_FORM_TITLE}>
                        <CardFormGroup groupTitle={"Name / Location"}>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Title / Event name..."
                                    id="title"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Organized by whom..."
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
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Gmaps Link"
                                    id="gmaps_link"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="City / Neighborhood"
                                    id="city_neighborhood"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Date / Time"} noMargin>
                            {dateTimeKeys.map(dayKey => (            
                                <CardFormItem
                                    key={dayKey}
                                    className={classes.gridVerticalSpacing}
                                    size={{xs: 12 , sm: 6, md: 4}}
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
                                </CardFormItem>
                            ))}
                            {/* spacer so next items go onto new line always */}
                            <CardFormItem size={{xs: 12}}></CardFormItem>
                            <CardFormItem
                                classname={classes.gridBothSpacing}
                                size={{xs: 12, sm: 3, md: 2}}
                            >
                                How often?
                            </CardFormItem>
                            <CardFormItem
                                className={classes.gridVerticalSpacing}
                                size={{xs: 12, sm: 9, md: 10}}
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
                            </CardFormItem>
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Game / Field Details"}>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Signup link..."
                                    id="signup_link"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
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
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Contact phone #..."
                                    id="contact_phone"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                        </CardFormGroup>
                        
                        <CardFormGroup groupTitle={"Facility Details"} noMargin>
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
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Fees"}>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Fees to enter facility:"
                                    id="fee_facility"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{
                                        type: "text",
                                        placeholder: "Free!"
                                    }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Fees to play on field / court:"
                                    id="fee_field"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{
                                        type: "text",
                                        placeholder: "50 EGP per hour"
                                    }}
                                />
                            </CardFormItem>
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Other"} noEndSpacer>
                            <CardFormItem size={{xs: 12}}>
                                <CustomInput
                                    labelText="Language(s) spoken..."
                                    id="languages"
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem size={{xs: 12}}>
                                <Tooltip
                                    title="Add any extra notes here! Example: Bring your ID and 5 dollars for field fees..."
                                    placement="top-start"
                                >
                                    <TextField
                                        // id="outlined-multiline-static"
                                        label="Extra Notes"
                                        multiline
                                        fullWidth
                                        rows="4"
                                        className={classes.textField}
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </CardFormItem>
                        </CardFormGroup>

                        {/* TODO: add CardFormAction */}
                    </CardForm>
                    
                    <GridContainer justify="center">
                        <GridItem xs={12} sm={12} md={10}>
                            <Card>
                                <CardBody>
                                    {/* Name / location */}
                                    {/* Date / time */}
                                    {/* Game & field details */}
                                    {/* Facilities details */}
                                    {/* Fee details */}
                                    {/* Other */}
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
                <Footer whiteFont />
            </div>
        </Fragment>)
    }
}

export default withStyles(pickupStyle)(AddPickup);