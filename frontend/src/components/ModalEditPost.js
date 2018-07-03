import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

import moment from "moment";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

import styles from "./styles";

class ModalEditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyEdit: this.props.body,
      titleEdit: this.props.title
    };
  }

  handleChangeTextField = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const {
      open,
      onClose,
      onEdit,
      id,
      author,
      timestamp,
      classes
    } = this.props;
    const { bodyEdit, titleEdit } = this.state;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Edit Post</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            id="date"
            label="Date"
            defaultValue={moment(timestamp).format("DD/MM/YYYY")}
            className={classes.textField}
            margin="normal"
          />
          <TextField
            label="Title"
            placeholder="Add title"
            id="title"
            value={titleEdit}
            onChange={this.handleChangeTextField("titleEdit")}
            className={classes.textField}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Body"
            placeholder="Add text"
            id="body"
            multiline
            rows="5"
            value={bodyEdit}
            onChange={this.handleChangeTextField("bodyEdit")}
            className={classes.textField}
            fullWidth
            margin="normal"
          />
          <TextField
            disabled
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
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            CANCEL
          </Button>
          <Button
            color="primary"
            onClick={() => onEdit(id, titleEdit, bodyEdit)}
            autoFocus
          >
            EDIT POST
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ModalEditPost.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
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
)(withStyles(styles, { withTheme: true })(ModalEditPost));
