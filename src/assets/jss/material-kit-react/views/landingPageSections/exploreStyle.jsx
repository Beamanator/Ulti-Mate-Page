import { title } from "assets/jss/material-kit-react.jsx";

const exploreStyle = {
    section: {
        padding: "70px 0",
        textAlign: "center"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: "#999"
    },
    greyBackground: {
        backgroundColor: "#E0E0E0"
    },
    // kinda sketchy override to get the list to sit near the dropdown button
    dropdownListCenter: {
        width: '200px'
    },
    outlinedButton: {
        border: '2px solid white'
    },
    extraBottomMargin: {
        marginBottom: '20px'
    }
};

export default exploreStyle;
