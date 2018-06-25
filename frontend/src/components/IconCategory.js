import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import IconUdacity from "./IconUdacity";
import IconReact from "./IconReact";
import IconRedux from "./IconRedux";


import styles from "./styles";

class IconCategory extends Component {
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.svg}>
        {children === "react" && (
        <IconReact/>
        )}
        {children === "redux" && (
        <IconRedux/>
        )}
        {children === "udacity" && (
       <IconUdacity/>
        )}
      </div>
    );
  }
}

IconCategory.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(IconCategory);
