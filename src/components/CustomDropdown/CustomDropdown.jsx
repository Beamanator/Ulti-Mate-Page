import React, { Component, Fragment } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// import { Manager, Reference, Popper } from "react-popper";

// @material-ui/core components
import {
    withStyles,
    MenuItem, MenuList,
    ClickAwayListener, Popper,
    Grow, Divider
} from '@material-ui/core';

// core components
import Button from "components/CustomButtons/Button.jsx";

import customDropdownStyle from "assets/jss/material-kit-react/components/customDropdownStyle.jsx";

class CustomDropdown extends Component {
    state = {
        open: false,
    }
    
    handleToggle = (event) => {
        this.setState(state => ({ open: !state.open }));
    }
    handleClose = ({ target }) => {
        if (this.anchorEl.contains(target)) {
            return;
        }
    
        this.setState({ open: false });
    }

    render() {
        const { open } = this.state;
        const {
            classes,
            buttonText, buttonIcon, buttonProps,
            dropdownList,
            dropdownHeader,
            caret,
            hoverColor,
            rtlActive,
            noLiPadding
        } = this.props;
        const caretClasses = classNames({
            [classes.caret]: true, // always have 'caret' class from customDropdownStyle.jsx
            [classes.caretActive]: open, // only rotate when state is open
            [classes.caretRTL]: rtlActive // ? I've never used this
        });
        const dropdownItem = classNames({
            [classes.dropdownItem]: true, // true means always have this class
            [classes[hoverColor + "Hover"]]: true,
            [classes.noLiPadding]: noLiPadding,
            [classes.dropdownItemRTL]: rtlActive
        });
        return (
            <Fragment>
                <Button
                    aria-label="Notifications"
                    aria-owns={open ? "menu-list" : null}
                    aria-haspopup="true"
                    {...buttonProps}
                    onClick={this.handleToggle}
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                >
                    {buttonIcon !== undefined ? (
                        <buttonIcon className={classes.buttonIcon} />
                    ) : null}
                    {buttonText !== undefined ? buttonText : null}
                    {caret ? <b className={caretClasses} /> : null}
                </Button>
                <Popper open={open} anchorEl={this.anchorEl} transition
                    className={classes.dropdown}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <ClickAwayListener onClickAway={this.handleClose}>
                                <MenuList role="menu" className={classes.menuList}>
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem
                                            onClick={this.handleClose}
                                            className={classes.dropdownHeader}
                                        >
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownDividerItem}
                                                />
                                            );
                                        }
                                        return (
                                            <MenuItem
                                                key={key}
                                                onClick={this.handleClose}
                                                className={dropdownItem}
                                            >
                                                {prop}
                                            </MenuItem>
                                        );
                                    })}
                                </MenuList>
                            </ClickAwayListener>
                        </Grow>
                    )}
                </Popper>
            </Fragment>
        );
    }
}

CustomDropdown.defaultProps = {
    caret: true,
    hoverColor: "primary"
};

CustomDropdown.propTypes = {
    classes: PropTypes.object.isRequired,
    hoverColor: PropTypes.oneOf(["black", "primary", "info", "success", "warning", "danger", "rose"]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool,
    noLiPadding: PropTypes.bool,
};

export default withStyles(customDropdownStyle)(CustomDropdown);
