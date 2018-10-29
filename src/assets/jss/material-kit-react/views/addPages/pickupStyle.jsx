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
    gridBothSpacing: {
        textAlign: 'center',
        marginTop: '4px',
    },
    gridVerticalSpacing: {
        marginTop: '2px',
        marginBottom: '2px',
    },
    groupDataBorder: {
        borderLeft: '2px solid black',
    },
    groupLabel: {
        textAlign: 'center',
        marginTop: "10px"
    },
    textField: {
        float: "right"
    },
    chipSpacing: {
        marginRight: '5px',
        marginBottom: '3px'
    },
    switchControlBorder: {
        border: '1px solid #d6d6d6',
        borderRadius: '12px',
    },
    switchControlSpacing: {
        paddingRight: '12px',
        margin: '2px',
    }
};

export default pickupStyle;