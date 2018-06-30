import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import IconHome from "./IconHome";
import IconUdacity from "./IconUdacity";
import IconReact from "./IconReact";
import IconRedux from "./IconRedux";
import IconAdd from "./IconAdd";

import styles from "./styles"

class Template extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, children } = this.props;

    return (
      <div className={classes.root}>
        <AppBar
          // position="absolute"
          position="fixed"
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Blog Udacity
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton
              onClick={this.handleDrawerClose}
              className={classes.iconWhite}
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <IconHome />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Home" />
            </ListItem>

            <ListItem button component={Link} to="/udacity">
              <ListItemIcon>
                <IconUdacity />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Udacity" />
            </ListItem>

            <ListItem button component={Link} to="/react">
              <ListItemIcon>
                <IconReact />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="React" />
            </ListItem>

            <ListItem component={Link} to="/redux" button>
              <ListItemIcon>
                <IconRedux />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Redux" />
            </ListItem>

            <Divider />

            <ListItem button component={Link} to="/newPost">
              <ListItemIcon>
                <IconAdd />
              </ListItemIcon>
              <ListItemText className={classes.iconText} primary="Add Post" />
            </ListItem>
          </List>
        </Drawer>

        <main className={classes.content}>
          <div className={classes.toolbarContent} />
          {children}
        </main>
      </div>
    );
  }
}

Template.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Template);
