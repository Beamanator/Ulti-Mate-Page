import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
// import classNames from "classnames";

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
import CustomTournamentExtra from "components/CustomTournamentExtra/CustomTournamentExtra.jsx";
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
    // this.enums = {
    //     extras_included: 
    // }
    state = {
        // tournament extras are like lunch, dinner, jerseys, etc. which may
        // -> be available (included in fees) or not available, or extra fees
        // -> for the tournament to organize
        // possible 'included' vals: 'yes', 'no', 'extra'
        extras: {
            accomodation: { included: 'no', extraPrice: '0' },
            transportation: { included: 'no', extraPrice: '0' },
            lunch: { included: 'no', extraPrice: '0' },
            dinner: { included: 'no', extraPrice: '0' },
            water: { included: 'no', extraPrice: '0' },
            jersey: { included: 'no', extraPrice: '0' },
            party: { included: 'no', extraPrice: '0' },
            disc: { included: 'no', extraPrice: '0' },
        },
    };

    // when 'yes' / 'no' / 'extra' are selected, this function handles
    // -> state change
    handleTournamentExtraIncludeChange = (type) => event => {
        let newExtraIncludedValue = event.target.value;

        this.setState({
            extras: {
                ...this.state.extras,
                [type]: {
                    ...this.state.extras[type],
                    included: newExtraIncludedValue,
                }
            }
        });
    }
    // handleTournamentExtraPriceChange = () => {}

    render() {
        const { classes, ...rest } = this.props;
        const { extras } = this.state;

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
                                    labelText="City / location description"
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
                                        className={classes.textareaField}
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </CardFormItem>
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Event / Registration Dates"}>
                            <CardFormItem>
                                <CustomInput
                                    className={classes.datetimeTextField}
                                    labelText="Start date / time"    
                                    id={PREFIX + "start_date_time"}
                                    formControlProps={{ fullWidth: true }}
                                    labelProps={{ shrink: true }}
                                    inputProps={{
                                        type: "datetime-local",
                                        // push props all the way to native 'input' elem
                                        inputProps: { step: 900 } // 15 min
                                    }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="End date / time"
                                    id={PREFIX + "end_date_time"}
                                    formControlProps={{ fullWidth: true }}
                                    labelProps={{ shrink: true }}
                                    inputProps={{
                                        type: "datetime-local",
                                        // push props all the way to native 'input' elem
                                        inputProps: { step: 900 } // 15 min
                                    }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Year of inception (volume #?)"
                                    id={PREFIX + "time_test3"}
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Registration opens on..."
                                    id={PREFIX + "reg_start"}
                                    formControlProps={{ fullWidth: true }}
                                    labelProps={{ shrink: true }}
                                    inputProps={{ type: "date" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText="Registration closes on..."
                                    id={PREFIX + "reg_end"}
                                    formControlProps={{ fullWidth: true }}
                                    labelProps={{ shrink: true }}
                                    inputProps={{ type: "date" }}
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
                                    buttonText="# of teams"
                                    dropdownHeader="# needed for a successful tournament"
                                    buttonProps={{
                                        color: "transparent",
                                        fullWidth: true
                                    }}
                                    dropdownList={[
                                        { divider: true },
                                        "4", "6", "8", "8-12", "> 12", "Any amount is fine"
                                    ]}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomDropdown
                                    buttonText="# of fields"
                                    dropdownHeader="How many fields are at the venue?"
                                    buttonProps={{
                                        color: "transparent",
                                        fullWidth: true
                                    }}
                                    dropdownList={[
                                        { divider: true },
                                        "1", "2", "3-4", "5-8", "> 8"
                                    ]}
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
                                    labelText="Other Fees (describe)"
                                    id={PREFIX + "fees_other"}
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Fees include..."}>
                            <CustomTournamentExtra
                                type={"Accomodation"}
                                details={extras.accomodation}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('accomodation')}
                            />
                            <CustomTournamentExtra
                                type={"Transportation"}
                                details={extras.transportation}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('transportation')}
                            />
                            <CustomTournamentExtra
                                type={"Lunch"}
                                details={extras.lunch}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('lunch')}
                            />
                            <CustomTournamentExtra
                                type={"Dinner"}
                                details={extras.dinner}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('dinner')}
                            />
                            <CustomTournamentExtra
                                type={"Water"}
                                details={extras.water}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('water')}
                            />
                            <CustomTournamentExtra
                                type={"Tournament-themed jersey"}
                                details={extras.jersey}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('jersey')}
                            />
                            <CustomTournamentExtra
                                type={"Tournament-themed disc"}
                                details={extras.disc}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('disc')}
                            />
                            <CustomTournamentExtra
                                type={"Party"}
                                details={extras.party}
                                onIncludeChange={this.handleTournamentExtraIncludeChange('party')}
                            />
                        </CardFormGroup>

                        <CardFormGroup groupTitle={"Other"} noEndSpacer>
                            <CardFormItem>
                                <CustomInput
                                    labelText={"Number of countries represented..."}
                                    id={PREFIX + "countries_represented"}
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
                            <CardFormItem>
                                <CustomInput
                                    labelText={"Language(s) spoken..."}
                                    id={PREFIX + "languages"}
                                    formControlProps={{ fullWidth: true }}
                                    inputProps={{ type: "text" }}
                                />
                            </CardFormItem>
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
                                        className={classes.textareaField}
                                        variant="outlined"
                                    />
                                </Tooltip>
                            </CardFormItem>
                        </CardFormGroup>

                        {/* TODO: add CardFormAction */}
                    </CardForm>
                </div>
                <Footer whiteFont />
            </div>
        </Fragment>);
    }
};

export default withStyles(tournamentStyle)(AddTournament);