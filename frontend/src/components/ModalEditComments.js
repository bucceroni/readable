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

class ModalEditComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyEdit: this.props.body,
      timestamp: Date.now()
    };
  }

  handleChangeTextField = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };


  render() {
    const { open, onClose, onEdit, id, author, classes } = this.props;
    const { bodyEdit, timestamp } = this.state;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Edit Comment</DialogTitle>
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
            placeholder={"Add text"}
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
            onClick={() => onEdit(id, timestamp, bodyEdit)}
            autoFocus
          >
            EDIT COMMENT
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ModalEditComments.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
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
)(withStyles(styles, { withTheme: true })(ModalEditComments));
