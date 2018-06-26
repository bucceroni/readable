import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import moment from "moment";
import { default as UUID } from "uuid";

import { Typography, Paper, Button, Snackbar } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import SelectSort from "../../components/SelectSort";

import styles from "./styles";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategories: "",
      id: "",
      title: "",
      body: "",
      author: "",
      disabledTextField: true
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getCategories();
  }

  closeSnackbar = () => {
    const { actions } = this.props;
    this.setState({
      selectedCategories: "",
      id: "",
      title: "",
      body: "",
      author: "",
      disabledTextField: true
    });
    actions.closeSnackbar();
  };

  handleChangeSelectCategories = value => {
    this.setState({
      selectedCategories: value,
      disabledTextField: false
    });
    this.handleChangeId();
  };

  handleChangeTextField = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  handleChangeId = () => {
    this.setState({
      id: UUID.v1()
    });
  };

  postAddPost = () => {
    const { id, title, body, author, selectedCategories } = this.state;
    const { timestamp, actions } = this.props;

    actions.postAddPost(id, timestamp, title, body, author, selectedCategories);
  };

  render() {
    const { classes, timestamp, listCategories, openSnackbar } = this.props;
    const {
      selectedCategories,
      title,
      body,
      author,
      disabledTextField
    } = this.state;

    return (
      <div>
        <Typography variant="display1" gutterBottom>
          New Post
        </Typography>
        <SelectSort
          handleChangeItem={this.handleChangeSelectCategories}
          listItems={listCategories}
          selectedItem={selectedCategories}
          title={"Categories"}
        />

        <Paper className={classes.root} elevation={4}>
          <Grid container>
            <Grid
              container
              wrap="nowrap"
              alignItems="center"
              direction="row"
              justify="center"
              item
              xs={12}
            >
              <Grid
                container
                wrap="nowrap"
                alignItems="flex-start"
                justify="flex-start"
                item
                xs={10}
              >
                <TextField
                  disabled={disabledTextField}
                  required
                  label="Title"
                  placeholder="Add title"
                  id="title"
                  value={title}
                  onChange={this.handleChangeTextField("title")}
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid
                container
                wrap="nowrap"
                alignItems="center"
                justify="center"
                item
                xs={2}
              >
                <TextField
                  disabled
                  id="date"
                  label="Date"
                  defaultValue={moment(timestamp).format("DD/MM/YYYY")}
                  className={classes.textField}
                  margin="normal"
                />
              </Grid>
            </Grid>

            <Grid
              container
              wrap="nowrap"
              alignItems="flex-start"
              direction="row"
              justify="flex-start"
              item
              xs={12}
            >
              <TextField
                disabled={disabledTextField}
                required
                id="body"
                label="Body"
                multiline
                rows="12"
                placeholder="Add text"
                value={body}
                onChange={this.handleChangeTextField("body")}
                className={classes.textField}
                fullWidth
                margin="normal"
              />
            </Grid>

            <Grid
              container
              wrap="nowrap"
              direction="row"
              alignItems="center"
              justify="center"
              item
              xs={12}
            >
              <Grid container wrap="nowrap" justify="center" item xs={10}>
                <TextField
                  disabled={disabledTextField}
                  required
                  id="author"
                  label="Author"
                  value={author}
                  onChange={this.handleChangeTextField("author")}
                  placeholder="Add author"
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid container wrap="nowrap" justify="center" item xs={2}>
                <Button
                  disabled={!title || !body || !author}
                  variant="raised"
                  color="primary"
                  className={classes.button}
                  onClick={this.postAddPost}
                >
                  Add Post
                </Button>
              </Grid>
            </Grid>

            <Snackbar
              autoHideDuration={2000}
              open={openSnackbar}
              onClose={this.closeSnackbar}
              ContentProps={{ className: classes.snackbar }}
              message={<span>Published successfully</span>}
            />
          </Grid>
        </Paper>
      </div>
    );
  }
}

NewPost.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  listCategories: PropTypes.array.isRequired,
  timestamp: PropTypes.number.isRequired,
  openSnackbar: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    ...state.newPost
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
)(withStyles(styles, { withTheme: true })(NewPost));
