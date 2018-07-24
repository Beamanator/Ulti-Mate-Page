/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      {/* Custom button */}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          href="https://www.youtube.com/channel/UCAOZsX0dTOWeu0Jb7vcGUtA"
          target="_blank"
          className={classes.navLink}
        >
          Check our YouTube
        </Button>
      </ListItem>

      {/* Twitter */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://twitter.com/FlyDiscInvasion"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>

      {/* Facebook */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/FlyingDiscInvasion/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>

      {/* Instagram */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/flying.disc.invasion/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>

      {/* Custom dropdown */}
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Dr. Frisbee Person..."
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/landing-page" className={classes.dropdownLink}>
              Home
            </Link>,
            <a
              href="#"
              target="_blank"
              className={classes.dropdownLink}
            >
              Login / Logout page
            </a>
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
