import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

// @material-ui/core components
import {
    withStyles,
    MenuItem, MenuList,
    ClickAwayListener,
    Paper, Grow, Divider
} from '@material-ui/core';

// core components
import Button from "components/CustomButtons/Button.jsx";

import customDropdownStyle from "assets/jss/material-kit-react/components/customDropdownStyle.jsx";

class CustomDropdown extends Component {
    state = {
        customId: ~~(Math.random()*10000) + 1,
        open: false
    }
    
    handleClick = () => {
        this.setState({ open: !this.state.open });
    }
    handleClose = ({ target }) => {
        // if you clicked on the span element inside the button, move target
        // -> up a level to the button so we can access its 'id'
        if (target.nodeName === "SPAN") {
            target = target.parentElement
        }

        // if target's id does NOT match this component's id, close the dropdown.
        if (+target.id !== this.state.customId) {
            this.setState({ open: false });
        }
        // else -> button will be closed by handleClick function
        // else {}
    }

    render() {
        const { open, customId } = this.state;
        const {
            classes,
            buttonText, buttonIcon, buttonProps,
            dropdownList,
            dropup,
            dropdownHeader,
            caret,
            hoverColor,
            left,
            rtlActive,
            noLiPadding
        } = this.props;
        const caretClasses = classNames({
            [classes.caret]: true,
            [classes.caretActive]: open,
            [classes.caretRTL]: rtlActive
        });
        const dropdownItem = classNames({
            [classes.dropdownItem]: true,
            [classes[hoverColor + "Hover"]]: true,
            [classes.noLiPadding]: noLiPadding,
            [classes.dropdownItemRTL]: rtlActive
        });
        return (
            <Manager>
                <Target>
                    <Button
                        aria-label="Notifications"
                        aria-owns={open ? "menu-list" : null}
                        aria-haspopup="true"
                        id={customId}
                        {...buttonProps}
                        onClick={this.handleClick}
                    >
                        {buttonIcon !== undefined ? (
                            <buttonIcon className={classes.buttonIcon} />
                        ) : null}
                        {buttonText !== undefined ? buttonText : null}
                        {caret ? <b className={caretClasses} /> : null}
                    </Button>
                </Target>
                <Popper
                    placement={
                        dropup
                            ? left ? "top-end" : "top-start"
                            : left ? "bottom-end" : "bottom-start"
                    }
                    eventsEnabled={open}
                    className={classNames({
                        [classes.popperClose]: !open,
                        [classes.pooperResponsive]: true
                    })}
                >
                    {!open ? null :
                        <ClickAwayListener
                            onClickAway={this.handleClose}
                        >
                            <Grow
                                in={open}
                                id="menu-list"
                                style={
                                    dropup
                                        ? { transformOrigin: "0 100% 0" }
                                        : { transformOrigin: "0 0 0" }
                                }
                            >
                                <Paper className={classes.dropdown}>
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
                                </Paper>
                            </Grow>
                        </ClickAwayListener>
                    }
                </Popper>
            </Manager>
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
