import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles"

class IconAdd extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.svg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="#02b3e4"/>
        </svg>
      </div>
    );
  }
}

IconAdd.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(IconAdd);
