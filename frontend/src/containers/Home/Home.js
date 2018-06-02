import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "./actions/HomeActions";
import { withStyles } from "@material-ui/core/styles";
import { bindActionCreators } from "redux";
import styles from "./styles";

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
    const { posts, categories } = this.props;
    console.log("posts: ", posts);
    console.log("categories: ", categories);

    return (
      <div>
        <p>Home</p>
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
