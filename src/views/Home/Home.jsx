import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import homeStyle from "assets/jss/material-kit-react/views/home.jsx";

// Sections for this page
import ExploreSection from './Sections/ExploreSection.jsx';
import HighlightSection from "./Sections/HighlightSection.jsx";
import ProjectsSection from "./Sections/ProjectsSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";

class Home extends Component {
    state = {
        searchParams: {
            proximity: '',
            userType: ''
        }
    }

    onChangeProximity = (newProximity) => {
        // error if newProximity is not possible value
        if ( !['global', 'local'].includes(newProximity) ) {
            console.error('HOME.JSX', `Invalid proximity:`, newProximity);
            return;
        }
        // else, if different, set new value
        else if (this.state.searchParams.proximity !== newProximity) {
            this.setState({
                searchParams: {
                    ...this.state.searchParams,
                    proximity: newProximity
                }
            });
        }
        // else, same same - no change
    }

    onChangeUserType = (newUserType) => {
        // error if userType is not possible value
        if ( !['player', 'volunteer', 'fan'].includes(newUserType) ) {
            console.error('HOME.JSX', `Invalid search type:`, newUserType);
            return;
        }
        // else, if different, set new value
        else if (this.state.searchParams.newUserType !== newUserType) {
            this.setState({
                searchParams: {
                    ...this.state.searchParams,
                    userType: newUserType
                }
            });
        }
        // else, same same - no change
    }

    onSearchClicked = () => {
        const {searchParams: { proximity, userType }} = this.state;
        // TODO: navigate to the "Find" tab?
        console.warn('search!', proximity, userType );
    }

    render() {
        const { classes, ...rest } = this.props;
        const {
            searchParams: { proximity, userType }
        } = this.state;

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Hip Hip!"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/FDI-landing-bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Ultimate</h1>
                                <h4>
                                    Every year, millions of atheletes hailing from every country around the world
                                    gather to compete in many different types of disc-sports. Hip Hip aims to
                                    bring these atheletes together by providing a one-stop shop for tournaments, 
                                    pickups, volunteer opportunities, and much more. Join us and feel the passion
                                    for ULTIMATE!
                                </h4>
                                {/* <br /> */}
                                {/* <Button
                                    color="danger"
                                    size="lg"
                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fas fa-play" />Watch video
                                </Button> */}
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <ExploreSection
                            proximity={proximity}
                            onChangeProximity={this.onChangeProximity}
                            userType={userType}
                            onChangeUserType={this.onChangeUserType}
                            onSearchClicked={this.onSearchClicked}
                        />
                        <HighlightSection />
                        <ProjectsSection />
                        <ContactSection />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(homeStyle)(Home);
