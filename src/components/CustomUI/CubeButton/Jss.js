const colorShadow = 'rgba(0,0,0,0.3)';
const colorDark = 'black';
const colorLight = '#fff';

const diceNdice_div = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    transition: 'transform .2s ease-in-out'
};

export default {
    diceWrapper: {
        perspective: 'none',
        width: '40px',
        height: '40px',
        position: 'relative',
        border: 'none',
        marginTop: '35px',
        marginLeft: '25px',
        transform: 'translate(-50%,-50%)',
        cursor: 'pointer',
        boxShadow: '0 10px 30px 2px ' + colorShadow,
        '&:hover $dice': {
            transform: 'translate(0,50%) rotateX(-90deg)'
        }
    },
    dice: {
        transformOrigin: '50% 50%',
        ...diceNdice_div,
        '& div': {
            ...diceNdice_div
        }
    },
    top: {
        backgroundColor: colorLight
    },
    front: {
        backgroundColor: colorDark,
        transform: 'translate(0,-100%) rotateX(90deg)',
        transformOrigin: 'bottom center'
    },
    face: {
        transform: 'translate(-50%,-50%)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        /* set size of area to draw the letter */
        height: '70%',
        width: '50%',
        border: '0px',
        /* important for making the letter!*/
        overflow: 'hidden',
        '&:before': {
            content: '" "',
            position: 'absolute',
            borderLeft: '.4em solid ' + colorLight,
            borderRight: '.33em solid ' + colorLight,
            borderTopRightRadius: '.3em',
            borderBottomRightRadius: '.3em',
            height: '100%',
            width: '50%',
            left: '0px'
        },
        '&:after': {
            content: '" "',
            position: 'absolute',
            height: '.38em',
            width: '62%',
            top: '38%',
            backgroundColor: colorLight,
            left: '0px'
        }
    },
    topFace: {
        '&:before': {
            borderColor: colorDark
        },
        '&:after': {
            backgroundColor: colorDark
        }
    }
}