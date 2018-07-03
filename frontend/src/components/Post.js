import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Input, Badge, Tooltip } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import MessageIcon from "@material-ui/icons/Message";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import IconCategory from "./IconCategory";
import ModalDelete from "./ModalDelete";
import ModalEditPost from "./ModalEditPost";

import styles from "./styles";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      openModalEdit: false
    };
  }

  handleIncrementVoteScore(id) {
    const { actions } = this.props;
    actions.incrementVoteScore(id);
  }

  handleDecrementVoteScore(id) {
    const { actions } = this.props;
    actions.decrementVoteScore(id);
  }

  handleClickOpenModal = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleDeletePost(id) {
    const { actions } = this.props;
    actions.deletePost(id);
    actions.getPosts();
    this.handleCloseModal();
  }

  handleClickOpenModalEdit = () => {
    this.setState({ openModalEdit: true });
  };

  handleCloseModalEdit = () => {
    this.setState({ openModalEdit: false });
  };

  handleEditPost = (id, title, body) => {
    const { actions } = this.props;
    actions.putEditPost(id, title, body);
    this.handleCloseModalEdit();
  };

  render() {
    const {
      classes,
      id,
      title,
      timestamp,
      author,
      body,
      commentCount,
      voteScore,
      date,
      category
    } = this.props;
    const { openModal, openModalEdit } = this.state;

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

            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              direction="column"
              justify="center"
              item
              xs={1}
            >
              <Tooltip id="tooltip-left" title="View" placement="left">
                <Button color="primary" component={Link} to={`/${category}/${id}`}>
                  <RemoveRedEyeIcon />
                </Button>
              </Tooltip>
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
                onClick={() => this.handleIncrementVoteScore(id)}
              >
                <ThumbUpIcon />
              </Button>
              <Typography>{voteScore}</Typography>
              <Button
                mini
                color="secondary"
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
              <Input
                readOnly
                disableUnderline={true}
                multiline
                fullWidth
                value={body}
              />

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
              <Tooltip id="tooltip-left" title="Edit" placement="left">
                <Button
                  mini
                  onClick={this.handleClickOpenModalEdit}
                >
                  <EditIcon />
                </Button>
              </Tooltip>

              <Tooltip id="tooltip-left" title="Delete" placement="left">
                <Button
                  mini
                  color="secondary"
                  onClick={this.handleClickOpenModal}
                >
                  <DeleteIcon />
                </Button>
              </Tooltip>

              <Tooltip id="tooltip-left" title="Comments" placement="left">
                <Button
                  color="primary"
                  component={Link}
                  to={`/${category}/${id}`}
                >
                  <Badge
                    className={classes.margin}
                    badgeContent={commentCount}
                    color="primary"
                  >
                    <MessageIcon color="primary" />
                  </Badge>
                </Button>
              </Tooltip>
            </Grid>
          </Grid>
        </Paper>

        <ModalDelete
          open={openModal}
          onClose={this.handleCloseModal}
          onDelete={() => this.handleDeletePost(id)}
        />

        <ModalEditPost
          open={openModalEdit}
          onClose={this.handleCloseModalEdit}
          onEdit={this.handleEditPost}
          author={author}
          body={body}
          timestamp={timestamp}
          title={title}
          id={id}
        />
      </div>
    );
  }
}

Post.propTypes = {
  actions: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    ...state.home
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
)(withStyles(styles, { withTheme: true })(Post));
