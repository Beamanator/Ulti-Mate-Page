import React from "react";
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
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ExploreSection from './Sections/ExploreSection.jsx';
import HighlightSection from "./Sections/HighlightSection.jsx";
import ProjectsSection from "./Sections/ProjectsSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand="Hip Hip!"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />
                {/* TODO: add main menu bar here? */}
                <Parallax filter image={require("assets/img/landing-bg.jpg")}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Be part of it.</h1>
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
                        <ExploreSection />
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

export default withStyles(landingPageStyle)(LandingPage);
