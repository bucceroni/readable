import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "./actions/HomeActions";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Post from "../../components/Post";
import SelectSort from "../../components/SelectSort";

import styles from "./styles";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { actions } = this.props;
    //actions.getCategories();
    actions.getPosts();
  }

  render() {
    //const { posts, categories } = this.props;
    const { posts } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Home
        </Typography>
        <SelectSort />

        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            author={post.author}
            body={post.body}
            commentCount={post.commentCount}
            voteScore={post.voteScore}
            date={post.timestamp}
          />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array
  //categories: PropTypes.array
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
)(withStyles(styles, { withTheme: true })(Home));
