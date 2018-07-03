import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { withStyles } from "@material-ui/core/styles";
import { Typography, Snackbar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import Post from "../../components/Post";
import SelectSort from "../../components/SelectSort";

import styles from "./styles";
class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSort: "score",
      listSort: [
        {
          name: "Date",
          path: "date"
        },
        {
          name: "Score",
          path: "score"
        }
      ]
    };
  }
  componentDidMount() {
    const { actions } = this.props;
    actions.getPosts();
  }

  handleChangeSelectSort = value => {
    this.setState({
      selectedSort: value
    });
  };

  closeSnackbarDeleted = () => {
    const { actions } = this.props;
    actions.closeSnackbar();
  };

  closeSnackbarEditPost = () => {
    const { actions } = this.props;
    actions.closeSnackbarEditPost();
  };

  render() {
    const {
      posts,
      classes,
      openSnackbarDeleted,
      openSnackbarEditPost
    } = this.props;
    const { selectedSort, listSort } = this.state;

    if (selectedSort === "score") {
      posts.sort(function(a, b) {
        return b.voteScore - a.voteScore;
      });
    } else {
      posts.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    }

    return (
      <div>
        <Grid container>
          <Grid
            container
            wrap="nowrap"
            alignItems="flex-start"
            direction="column"
            justify="flex-end"
            item
            xs={9}
          >
            <Typography variant="display1" gutterBottom>
              Redux Page
            </Typography>
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
            <SelectSort
              handleChangeItem={this.handleChangeSelectSort}
              listItems={listSort}
              selectedItem={selectedSort}
              title={"Sort"}
            />
          </Grid>
        </Grid>
        {posts.map(
          post =>
            post.category === "redux" ? (
              <Post
                key={post.id}
                id={post.id}
                title={post.title}
                author={post.author}
                body={post.body}
                commentCount={post.commentCount}
                voteScore={post.voteScore}
                date={post.timestamp}
                category={post.category}
                timestamp={post.timestamp}
              />
            ) : null
        )}

        <Snackbar
          autoHideDuration={2000}
          open={openSnackbarDeleted}
          onClose={this.closeSnackbarDeleted}
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

ReduxPage.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  openSnackbarDeleted: PropTypes.bool.isRequired,
  openSnackbarEditPost: PropTypes.bool.isRequired
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
)(withStyles(styles, { withTheme: true })(ReduxPage));
