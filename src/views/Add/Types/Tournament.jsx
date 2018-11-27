import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
    TextField,
    Tooltip,
} from "@material-ui/core";

// core components
import CardForm from "components/CardForm/CardForm.jsx";
import CardFormGroup from "components/CardForm/CardFormGroup.jsx";
import CardFormItem from "components/CardForm/CardFormItem.jsx";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

// custom styles
import tournamentStyle from "assets/jss/material-kit-react/views/addTypes/tournamentStyle.jsx";

// images
import image from "assets/img/bg7.jpg";

// consts
const CARD_FORM_TITLE = "Add your Tournament so players can find you!";
const PREFIX = "TOURNAMENT_ELEM_ID_";

class AddTournament extends Component {
    render() {
        const { classes, ...rest } = this.props;

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
                        <CardForm formTitle={CARD_FORM_TITLE}>
                            <CardFormGroup groupTitle={"Name / Location"}>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Tournament name..."
                                        id={PREFIX + "name"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Organized by whom..."
                                        id={PREFIX + "organizer"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Location (Gmaps link)"
                                        id={PREFIX + "gmaps"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="City / location"
                                        id={PREFIX + "location"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Website"
                                        id={PREFIX + "website"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem size={{'xs': 12}}>
                                    <Tooltip
                                        title="Describe your event! Get people excited!"
                                        placement="top-start"
                                    >
                                        <TextField
                                            // id="outlined-multiline-static"
                                            label="Tournament Description"
                                            multiline
                                            fullWidth
                                            rows="4"
                                            className={classes.textField}
                                            variant="outlined"
                                        />
                                    </Tooltip>
                                </CardFormItem>
                            </CardFormGroup>

                            <CardFormGroup groupTitle={"Date / Registration"}>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Event date range?..."
                                        id={PREFIX + "time_test"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Duration (auto calculated?)"
                                        id={PREFIX + "time_test2"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Year of inception (volume #?)"
                                        id={PREFIX + "time_test2"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                            </CardFormGroup>

                            <CardFormGroup groupTitle={"Rules / Field Details"}>
                                <CardFormItem>
                                    <CustomDropdown
                                        buttonText="Competition level"
                                        dropdownHeader="How serious is the tournament?"
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
                                        buttonText="Surface type"
                                        dropdownHeader="The field is made of..."
                                        buttonProps={{
                                            color: "transparent",
                                            fullWidth: true
                                        }}
                                        dropdownList={[
                                            { divider: true },
                                            "Real grass", "Astroturf", "Sand", "Asphalt",
                                            "Wood / Indoor", "Other (see final notes)"
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
                            </CardFormGroup>

                            <CardFormGroup groupTitle={"Yes / No's"}>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Meals included?"
                                        id={PREFIX + "meals_included"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="continue here... (yes / no / extra)"
                                        id={PREFIX + "extra"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                            </CardFormGroup>

                            <CardFormGroup groupTitle={"Fees"}>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Player Fees"
                                        id={PREFIX + "fees_player"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Team Fees"
                                        id={PREFIX + "fees_team"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Registration begins..."
                                        id={PREFIX + "reg_start"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                                <CardFormItem>
                                    <CustomInput
                                        labelText="Registration deadline..."
                                        id={PREFIX + "reg_end"}
                                        formControlProps={{ fullWidth: true }}
                                        inputProps={{ type: "text" }}
                                    />
                                </CardFormItem>
                            </CardFormGroup>

                            <CardFormGroup groupTitle={"Other"} noEndSpacer>
                                <CardFormItem size={{'xs': 12}}>
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
                        </CardForm>
                    </div>
                </div>
                <Footer whiteFont />
            </Fragment>
        );
    }
};

export default withStyles(tournamentStyle)(AddTournament);