import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "./actions/HomeActions";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import styles from "./styles";
import Post from '../../components/Post'
import { Typography } from "@material-ui/core";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getCategories();
    actions.getPosts();
  }

  render() {
    //const { posts, categories } = this.props;
    const { posts } = this.props;

    return (
      <div>
        <Typography variant="display1" gutterBottom>Home</Typography>

        {posts.map(post => 
        <Post title={post.title} author={post.author} body={post.body} commentCount={post.commentCount} voteScore={post.voteScore}/>
      )}
      </div>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  posts: PropTypes.array,
  categories: PropTypes.array
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(Home)
);
