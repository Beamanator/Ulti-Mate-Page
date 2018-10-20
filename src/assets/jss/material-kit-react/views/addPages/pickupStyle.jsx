import { container, title } from "assets/jss/material-kit-react.jsx";

const pickupStyle = {
    container: {
        ...container,
        zIndex: '2',
        position: 'relative',
        paddingTop: '200px',
        color: '#FFFFFF'
    },
    bkgStyles: {
        minHeight: "100vh",
        maxHeight: "1200px",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
        "&:before,&:after": {
            position: "absolute",
            zIndex: "1",
            width: "100%",
            height: "100%",
            display: "block",
            left: "0",
            top: "0",
            content: '""'
        },
        // footer styles
    },
    cardHeader: {
        width: "auto",
        textAlign: "center",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "-40px",
        padding: "20px 0",
        marginBottom: "15px"
    },
    cardFooter: {
        paddingTop: "0rem",
        border: "0",
        borderRadius: "6px",
        justifyContent: "center !important"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    groupLabel: {
        textAlign: 'center',
        marginTop: "10px"
    },
    groupDataBorder: {
        borderLeft: '2px solid black',
    },
    textField: {
        flex: 1,
        width: "auto",
    },
    chipSpacing: {
        marginRight: '5px'
    },
    // title: {
    //     ...title,
    // }
};

export default pickupStyle;