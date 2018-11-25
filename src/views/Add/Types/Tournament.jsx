import React, { Component, Fragment } from 'react';

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import CardForm from "components/CardForm/CardForm.jsx";
import Footer from "components/Footer/Footer.jsx";
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

// custom styles
import tournamentStyle from "assets/jss/material-kit-react/views/addTypes/tournamentStyle.jsx";

// images
import image from "assets/img/bg7.jpg";

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
                        <CardForm
                            formTitle="Add your Tournament so players can find you!"
                        />
                    </div>
                </div>
                <Footer whiteFont />
            </Fragment>
        );
    }
};

export default withStyles(tournamentStyle)(AddTournament);