import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../containers/Home/actions/HomeActions";

import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MessageIcon from "@material-ui/icons/Message";
import IconHome from "./IconHome";



const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1
  })
});

class Post extends Component {

  handleIncrementVoteScore(id) {
    const {actions} = this.props
    actions.incrementVoteScore(id);
  };

  handleDecrementVoteScore(id){
    const {actions} = this.props
    actions.decrementVoteScore(id);
  };

  render() {
    const { classes, id, title, author, body, commentCount, voteScore, date} = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Grid container>
            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              direction="column"
              justify="center"
              item
              xs={2}
            >
              <IconHome />
            </Grid>

            <Grid
              container
              wrap="nowrap"
              alignItems="flex-start"
              direction="column"
              justify="flex-start"
              item
              xs={9}
            >
              <Typography variant="title" gutterBottom>
                {title}
              </Typography>

              <Typography variant="caption" gutterBottom>
                Author: {author}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              direction="column"
              justify="center"
              item
              xs={2}
            >
              <Button
                mini
                color="primary"
                className={classes.button}
                onClick={() => this.handleIncrementVoteScore(id)}
              >
                <ThumbUpIcon />
              </Button>
              <div>{voteScore}</div>
              <Button
                mini
                color="secondary"
                className={classes.button}
                onClick={() => this.handleDecrementVoteScore(id)}
              >
                <ThumbDownIcon />
              </Button>
            </Grid>

            <Grid
              container
              wrap="nowrap"
              alignItems="flex-start"
              direction="column"
              justify="space-between"
              item
              xs={9}
            >
              <Typography component="p">{body}</Typography>

              <Typography variant="caption" gutterBottom>
                Published: {moment(date).format("d/M/YYYY - h:mm:ss a")}
              </Typography>
            </Grid>

            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              direction="column"
              justify="center"
              item
              xs={1}
            >
              <MessageIcon color="primary" />
              <div>{commentCount}</div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }
}

Post.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Post));


