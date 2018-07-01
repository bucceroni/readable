import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions/actions";

import moment from "moment";

import {
  Typography,
  Paper,
  Button,
  Snackbar,
  FormControl,
  InputLabel,
  NativeSelect,
  Input
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import styles from "./styles";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    const {
      actions,
      match: { params }
    } = this.props;
    actions.getDetailsPost(params.id);
  }

  closeSnackbarEditPost = () => {
    const { actions } = this.props;
    this.setState({
      title: "",
      body: ""
    });
    actions.closeSnackbarEditPost();
  };

  handleChangeTextField = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  putEditPost = () => {
    const { actions, details } = this.props;
    const { title, body } = this.state;
    actions.putEditPost(details.id, title, body);
    this.closeSnackbarEditPost();
    
   
  };

  render() {
    const { classes, details, openSnackbarEditPost } = this.props;
    const { title, body } = this.state;

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
              Edit Post
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
            <FormControl className={classes.formControl} disabled>
              <InputLabel htmlFor="name-native-disabled">Categories</InputLabel>
              <NativeSelect
                value={details.category}
                input={<Input name="name" id="name-native-disabled" />}
              >
                <option value="" />
                <optgroup label="categories">
                  <option value={details.category}>{details.category}</option>
                </optgroup>
              </NativeSelect>
            </FormControl>
          </Grid>
        </Grid>

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
                  label="Title"
                  id="title"
                  placeholder={details.title}
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
                  label="Date"
                  defaultValue={moment(details.timestamp).format("DD/MM/YYYY")}
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
                id="body"
                label="Body"
                multiline
                rows="12"
                placeholder={details.body}
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
                  disabled
                  label="Author"
                  defaultValue={details.author}
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid container wrap="nowrap" justify="center" item xs={2}>
                <Button
                 
                  variant="raised"
                  color="primary"
                  className={classes.button}
                  onClick={this.putEditPost}
                >
                  Edit Post
                </Button>
              </Grid>
            </Grid>

            <Snackbar
              autoHideDuration={2000}
              open={openSnackbarEditPost}
              onClose={this.closeSnackbarEditPost}
              ContentProps={{ className: classes.snackbar }}
              message={<span>Post edit successfully</span>}
            />
          </Grid>
        </Paper>
      </div>
    );
  }
}

EditPost.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  details: PropTypes.object.isRequired
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
)(withStyles(styles, { withTheme: true })(EditPost));
