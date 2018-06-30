import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";

class ModalDelete extends React.Component {

  render() {
      const{open , onClose, onDelete} = this.props

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once you delete, there is no going back. Please be certain.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            CANCEL
          </Button>
          <Button
            onClick={onDelete}
            color="secondary"
            autoFocus
          >
            DELETE
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ModalDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  onDelete: PropTypes.func
};

export default withMobileDialog()(ModalDelete);
