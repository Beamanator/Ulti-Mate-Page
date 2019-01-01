import React, { Fragment } from 'react';
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import {
    FormControlLabel,
    Hidden,
    Switch,
    Typography,
} from "@material-ui/core";

// core components
import CardFormItem from "components/CardForm/CardFormItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

// style
import customTournamentExtraStyle from "assets/jss/material-kit-react/components/customTournamentExtraStyle.jsx";


const CustomTournamentExtra = (props) => {
    const {
        classes,
        details,
        labels,
        onIncludeChange,
        type,
    } = props;

    return (
        <Fragment>
            <CardFormItem size={{xs: 4, lg: 2}}>
                <Typography variant={"h6"} gutterBottom>
                    {type}
                </Typography>
            </CardFormItem>
            <CardFormItem size={{xs: 8, lg: 5}}>
                <FormControlLabel
                    control={
                        <Switch
                            checked={details.included === 'yes'}
                            onChange={onIncludeChange}
                            value="yes"
                        />
                    }
                    label={labels.yes}
                    labelPlacement="top"
                    className={classes.formControlLabelSpacing}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={details.included === 'no'}
                            onChange={onIncludeChange}
                            value="no"
                        />
                    }
                    label={labels.no}
                    labelPlacement="top"
                    className={classes.formControlLabelSpacing}
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={details.included === 'extra'}
                            onChange={onIncludeChange}
                            value="extra"
                        />
                    }
                    label={labels.extra}
                    labelPlacement="top"
                    className={classes.formControlLabelSpacing}
                />
            </CardFormItem>
            {details.included === 'extra' ? (<Fragment>
                <Hidden lgUp>
                    <CardFormItem size={{xs: 4}}></CardFormItem>
                </Hidden>
                <CardFormItem size={{xs: 8, lg: 5}}>
                    <CustomInput
                        labelText={`How much extra does ${type} cost?`}
                        id={type + "+extra"}
                        formControlProps={{ fullWidth: true }}
                        inputProps={{ type: "text" }}
                    />
                </CardFormItem>
            </Fragment>) : <CardFormItem size={{xs: false, lg: 5}}></CardFormItem>}
        </Fragment>
    );
}

CustomTournamentExtra.defaultProps = {
    details: { included: 'no', extraPrice: 'unknown' },
    labels: {yes: 'Yes', no: 'No', extra: 'Extra'},
};

CustomTournamentExtra.propTypes = {
    details: PropTypes.object,
    labels: PropTypes.object,
    onIncludeChange: PropTypes.func,
    type: PropTypes.string,
};

export default withStyles(customTournamentExtraStyle)(CustomTournamentExtra);