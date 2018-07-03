import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withRouter } from "react-router";
import { compose } from "redux";

import { Typography, Paper, Button, Snackbar } from "@material-ui/core";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

import Post from "../../components/Post";
import Comments from "../../components/Comments";
import ModalAddComments from "../../components/ModalAddComments";
import NotFound from "../NotFound/NotFound";

import styles from "./styles";

class DetailsPost extends Component {
  state = {
    openModalAddComments: false
  };
  componentDidMount() {
    const {
      actions,
      match: { params }
    } = this.props;
    actions.getPosts();
    actions.getDetailsPost(params.id);
    actions.getCommentsPost(params.id);
  }

  handleOpenModalAddComments = () => {
    this.setState({ openModalAddComments: true });
  };

  handleCloseModalAddComments = () => {
    this.setState({ openModalAddComments: false });
  };

  closeSnackbar = () => {
    const { actions, history } = this.props;
    actions.closeSnackbar();
    history.goBack()
  };

  closeSnackbarDeletedComments = () => {
    const { actions } = this.props;
    actions.closeSnackbarDeletedComments();
  };

  closeSnackbarAddComments = () => {
    const { actions } = this.props;
    actions.closeSnackbarAddComments();
  };

  closeSnackbarEditComment = () => {
    const { actions } = this.props;
    actions.closeSnackbarEditComment();
  };

  closeSnackbarEditPost = () => {
    const { actions } = this.props;
    actions.closeSnackbarEditPost();
  };

  render() {
    const {
      classes,
      details,
      commentsPost,
      posts,
      openSnackbarDeleted,
      openSnackbarDeletedComments,
      openSnackbarAddComments,
      openSnackbarEditComment,
      openSnackbarEditPost
    } = this.props;
    const { openModalAddComments } = this.state;

    return (
      <div>
        <Grid container>
          <Grid
            container
            wrap="nowrap"
            alignItems="flex-start"
            direction="column"
            justify="flex-start"
            item
            xs={9}
          >
            {details.id && (
              <Typography variant="display1" gutterBottom>
                Details Post
              </Typography>
            )}
          </Grid>

          <Grid
            container
            wrap="nowrap"
            alignItems="flex-end"
            direction="column"
            justify="flex-end"
            item
            xs={3}
          >
            {details.id && (
              <Button
                variant="flat"
                color="primary"
                className={classes.button}
                onClick={this.handleOpenModalAddComments}
              >
                <AddIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Add comment
              </Button>
            )}
          </Grid>
        </Grid>
        {posts.map(post => {
          if (post.id === details.id) {
            return (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                body={post.body}
                commentCount={commentsPost.length}
                voteScore={post.voteScore}
                date={post.timestamp}
                category={post.category}
                timestamp={post.timestamp}
              />
            );
          } else {
            return null;
          }
        })}
        {!details.id && <NotFound />}
        {/* {!details.id && (
          <Paper className={classes.noComments} elevation={4}>
            <Typography variant="subheading" gutterBottom>
              Ops!!! Post deleted
            </Typography>
          </Paper>
        )} */}

        {details.id && commentsPost.length > 0 ? (
          <Paper className={classes.root} elevation={4}>
            <Typography variant="subheading" gutterBottom>
              Comments
            </Typography>
            {commentsPost.map(comment => {
              if (comment.deleted === false) {
                return (
                  <Comments
                    key={comment.id}
                    id={comment.id}
                    author={comment.author}
                    body={comment.body}
                    voteScore={comment.voteScore}
                    date={comment.timestamp}
                  />
                );
              } else {
                return null;
              }
            })}
          </Paper>
        ) : (
          details.id && (
            <Paper className={classes.noComments} elevation={4}>
              <Typography variant="subheading" gutterBottom>
                No comments
              </Typography>
            </Paper>
          )
        )}

        <ModalAddComments
          open={openModalAddComments}
          onClose={this.handleCloseModalAddComments}
          parentId={details.id}
        />

        <Snackbar
          autoHideDuration={2000}
          open={openSnackbarAddComments}
          onClose={this.closeSnackbarAddComments}
          ContentProps={{ className: classes.snackbar }}
          message={<span>Comment published successfully</span>}
        />
        <Snackbar
          autoHideDuration={2000}
          open={openSnackbarEditComment}
          onClose={this.closeSnackbarEditComment}
          ContentProps={{ className: classes.snackbar }}
          message={<span>Comment edited successfully</span>}
        />
        <Snackbar
          autoHideDuration={2000}
          open={openSnackbarDeletedComments}
          onClose={this.closeSnackbarDeletedComments}
          ContentProps={{ className: classes.snackbar }}
          message={<span>Comment deleted successfully</span>}
        />
        <Snackbar
          autoHideDuration={2000}
          open={openSnackbarDeleted}
          onClose={this.closeSnackbar}
          ContentProps={{ className: classes.snackbar }}
          message={<span>Deleted successfully</span>}
        />

        <Snackbar
          autoHideDuration={2000}
          open={openSnackbarEditPost}
          onClose={this.closeSnackbarEditPost}
          ContentProps={{ className: classes.snackbar }}
          message={<span>Post edit successfully</span>}
        />
      </div>
    );
  }
}

DetailsPost.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired,
  commentsPost: PropTypes.array.isRequired,
  posts: PropTypes.array.isRequired,
  openSnackbarAddComments: PropTypes.bool.isRequired,
  openSnackbarEditComment: PropTypes.bool.isRequired,
  openSnackbarEditPost: PropTypes.bool.isRequired,
  openSnackbarDeletedComments: PropTypes.bool.isRequired,
  openSnackbarDeleted: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    ...state.detailsPost,
    posts: state.home.posts,
    openSnackbarDeleted: state.home.openSnackbarDeleted,
    openSnackbarEditPost: state.home.openSnackbarEditPost
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

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter,
  withStyles(styles, { withTheme: true })
)(DetailsPost);
