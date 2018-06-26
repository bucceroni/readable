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
  class ReactPage extends Component {
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
      actions.getPostsCategory("react");
    }
  
    handleChangeSelectSort = value => {
      this.setState({
        selectedSort: value
      });
    };
  
    render() {
      const { posts } = this.props;
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
          <Typography variant="display1" gutterBottom>
            React Page
          </Typography>
  
          <SelectSort
            handleChangeItem={this.handleChangeSelectSort}
            listItems={listSort}
            selectedItem={selectedSort}
            title={"Sort"}
          />
  
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
              category={post.category}
            />
          ))}
        </div>
      );
    }
  }
  
  ReactPage.propTypes = {
    actions: PropTypes.object.isRequired,
    postsReact: PropTypes.array
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
  )(withStyles(styles, { withTheme: true })(ReactPage));
