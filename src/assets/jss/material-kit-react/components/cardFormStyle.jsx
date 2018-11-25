import { container } from "assets/jss/material-kit-react.jsx";

const cardFormStyle = theme => ({
    // container: {
    //     ...container,
    //     zIndex: '2',
    //     position: 'relative',
    //     paddingTop: '200px',
    //     // color: '#FFFFFF'
    // },
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
    // textField: {
    //     float: "right",
    //     color: "#495057",
    //     fontSize: "14px",
    //     "&,&::placeholder": {
    //         fontSize: "14px",
    //         fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    //         fontWeight: "400",
    //         lineHeight: "1.42857",
    //         opacity: "1"
    //     },
    //     "&::placeholder": {
    //         color: "#AAAAAA"
    //     }
    // },
    // chipSpacing: {
    //     marginRight: '5px',
    //     marginBottom: '3px'
    // },
    // switchControlBorder: {
    //     border: '1px solid #d6d6d6',
    //     borderRadius: '12px',
    // },
    // switchControlSpacing: {
    //     paddingRight: '12px',
    //     margin: '2px',
    // },
    // lightTooltip: {
    //     background: theme.palette.common.white,
    //     color: theme.palette.text.primary,
    //     boxShadow: theme.shadows[1],
    //     fontSize: 11,
    // },
});

export default cardFormStyle;