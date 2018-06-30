import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

import moment from "moment";
import { default as UUID } from "uuid";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField } from "@material-ui/core";

import styles from "./styles";

class ModalAddComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      body: "",
      author: "",
      timestamp: Date.now()
    };
  }

  handleChangeId = () => {
    this.setState({
      id: UUID.v1()
    });
  };

  handleChangeTextField = name => event => {
    this.setState({
      [name]: event.target.value
    });
    this.handleChangeId();
  };

  postAddComments = () => {
    this.handleChangeId();
    const { id, timestamp, body, author } = this.state;
    const { actions, parentId, onClose } = this.props;
    actions.postAddComments(id, timestamp, body, author, parentId);
    this.setState({
      id: "",
      body: "",
      author: "",
      timestamp: Date.now()
    });
    onClose();
  };

  render() {
    const { open, onClose, classes } = this.props;
    const { body, author, timestamp } = this.state;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Add Comment</DialogTitle>
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
            id="body"
            label="Body"
            multiline
            rows="5"
            placeholder="Add text"
            value={body}
            onChange={this.handleChangeTextField("body")}
            className={classes.textField}
            fullWidth
            margin="normal"
          />
          <TextField
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
            disabled={!body || !author}
            color="primary"
            onClick={this.postAddComments}
            autoFocus
          >
            ADD COMMENT
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ModalAddComments.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  parentId: PropTypes.string
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
)(withStyles(styles, { withTheme: true })(ModalAddComments));
