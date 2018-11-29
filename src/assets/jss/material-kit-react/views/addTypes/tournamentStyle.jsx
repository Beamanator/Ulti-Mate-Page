import { container } from "assets/jss/material-kit-react.jsx";

const tournamentStyle = theme => ({
    container: {
        ...container,
        zIndex: '2',
        position: 'relative',
        paddingTop: '200px',
        // color: '#FFFFFF'
    },
    bkgStyles: {
        minHeight: "100vh",
        /**
         * 24 Nov 2018: removin 'maxHeight: "1200px"' property causes 2 things:
         * 1) background image spans full height of page (good)
         * 2) links at bottom of page are now dark (bad)
         * -> solve by adding 'whiteFont' prop to Footer
         */
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
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center"
    },
    textareaField: {
        float: "right",
        color: "#495057",
        fontSize: "14px",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1"
        },
        "&::placeholder": {
            color: "#AAAAAA"
        }
    },
    datetimeTextField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
});

export default tournamentStyle;