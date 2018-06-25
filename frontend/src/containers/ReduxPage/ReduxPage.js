import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Post from "../../components/Post";
import SelectSort from "../../components/SelectSort";

import styles from "./styles"
class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSort: "date",
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
    actions.getPostsCategoryRedux("redux");
  }

  handleChangeSelectSort = value => {
    this.setState({
      selectedSort: value
    });
  };

  render() {
    const { postsRedux } = this.props;
    const { selectedSort, listSort } = this.state;

    if (selectedSort === "score") {
      postsRedux.sort(function(a, b) {
        return b.voteScore - a.voteScore;
      });
    } else {
      postsRedux.sort(function(a, b) {
        return b.timestamp - a.timestamp;
      });
    }

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          Redux Page
        </Typography>

        <SelectSort
          handleChangeItem={this.handleChangeSelectSort}
          listItems={listSort}
          selectedItem={selectedSort}
          title={"Sort"}
        />

        {postsRedux.map(post => (
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
            array={postsRedux}
          />
        ))}
      </div>
    );
  }
}

ReduxPage.propTypes = {
  actions: PropTypes.object.isRequired,
  postsRedux: PropTypes.array
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