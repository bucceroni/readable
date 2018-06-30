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
import { Input } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import DeleteIcon from "@material-ui/icons/Delete";

import ModalDelete from "./ModalDelete";

import styles from "./styles";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false
    };
  }

  handleClickOpenModal = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleIncrementVoteScoreComments(id) {
    const { actions } = this.props;
    actions.incrementVoteScoreComments(id);
  }

  handleDecrementVoteScoreComments(id) {
    const { actions } = this.props;
    actions.decrementVoteScoreComments(id);
  }

  handleDeleteComments(id) {
    const { actions } = this.props;
    actions.deleteComments(id);
    this.handleCloseModal();
  }

  render() {
    const { classes, id, author, body, voteScore, date } = this.props;
    const { openModal } = this.state;

    return (
      <div>
        <Paper className={classes.rootComments} elevation={2}>
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
                onClick={() => this.handleIncrementVoteScoreComments(id)}
              >
                <ThumbUpIcon />
              </Button>
              <Typography>{voteScore}</Typography>
              <Button
                mini
                color="secondary"
                onClick={() => this.handleDecrementVoteScoreComments(id)}
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
              <Input
                readOnly
                disableUnderline={true}
                multiline
                fullWidth
                defaultValue={body}
              />
              <Typography variant="caption" gutterBottom>
                Published: {moment(date).format("DD/MM/YYYY")}<br />
                Author: {author}
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
              <Button
                mini
                color="secondary"
                onClick={this.handleClickOpenModal}
              >
                <DeleteIcon />
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <ModalDelete
          open={openModal}
          onClose={this.handleCloseModal}
          onDelete={() => this.handleDeleteComments(id)}
        />
      </div>
    );
  }
}

Comments.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    ...state.detailsPost
  };
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
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Comments));
