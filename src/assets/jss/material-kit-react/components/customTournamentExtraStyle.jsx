const customTournamentExtraStyle = theme => ({
    label: {
        color: 'red',
    },
    formControlLabelSpacing: {
        // added to fit 3 'switch' items in one line
        marginLeft: '10px',
        marginRight: '10px',
        // added to prevent 'input' height making screen bounch when it
        // -> shows / hides based on 'switch' selection
        marginTop: '5px',
        marginBottom: '5px',
    }
});

export default customTournamentExtraStyle;