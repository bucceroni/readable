import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MessageIcon from "@material-ui/icons/Message";

import IconCategory from "./IconCategory";

import styles from "./styles";

class Post extends Component {
  handleIncrementVoteScore(id, array) {
    const { actions } = this.props;
    actions.incrementVoteScore(id, array);
  }

  handleDecrementVoteScore(id, array) {
    const { actions } = this.props;
    actions.decrementVoteScore(id, array);
  }

  render() {
    const {
      classes,
      id,
      title,
      author,
      body,
      commentCount,
      voteScore,
      date,
      category,
      array
    } = this.props;

    return (
      <div>
        <Paper className={classes.rootPost} elevation={4}>
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
              <IconCategory>{category}</IconCategory>
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
                onClick={() => this.handleIncrementVoteScore(id, array)}
              >
                <ThumbUpIcon />
              </Button>
              <Typography>{voteScore}</Typography>
              <Button
                mini
                color="secondary"
                onClick={() => this.handleDecrementVoteScore(id, array)}
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
                Published: {moment(date).format("DD/MM/YYYY")}
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
  category: PropTypes.string.isRequired
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

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Post));
