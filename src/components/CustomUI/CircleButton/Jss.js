const colorLight = 'white';
const colorDark = 'black';
const colorStandOut = 'yellow';

export default {
    button: {
        width: 40,
        height: 40,
        backgroundColor: colorLight,
        border: 'none',
        borderRadius: 20,
        cursor: 'pointer',
        fontSize: '2em',
        transition: 'transform 1s, background-color 1s',
        '&:hover': {
            transform: 'rotate(360deg) scale(1.2)',
            backgroundColor: colorStandOut
        }
    },
    letter: {
        position: 'relative',
        '&:before': {
            content: '" "',
            position: 'absolute',
            borderLeft: '.2em solid ' + colorDark,
            borderRight: '.2em solid ' + colorDark,
            borderTopRightRadius: '.2em',
            borderBottomRightRadius: '.2em',
            height: 26,
            width: 7,
            left: -10,
            top: -12
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            left: -10,
            top: -1,
            height: 6,
            width: 11,
            backgroundColor: colorDark,
        }
    }
}