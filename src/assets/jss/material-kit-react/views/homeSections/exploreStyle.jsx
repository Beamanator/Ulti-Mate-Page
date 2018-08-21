import { title } from "assets/jss/material-kit-react.jsx";

const selectedStyles = {
    zIndex: 1,
    '& $imageBackdrop': {
        opacity: 0.15,
    },
    '& $imageMarked': {
        opacity: 0, // little line below the title
    },
    '& $imageTitle': {
        border: '4px solid currentColor',
    },
}

const exploreStyle = theme => ({
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
    outlinedSelectedButton: {
        fontWeight: 'bold'
    },
    extraBottomMargin: {
        marginBottom: '20px'
    },
    // picker styles
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            ...selectedStyles
        },
    },
    focusVisible: {},
    imageSelected: {
        ...selectedStyles
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.6,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
});

export default exploreStyle;
