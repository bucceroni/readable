import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import styles from "./styles";

class SelectSort extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleChange = event => {
    this.props.handleChangeItem(event.target.value);
  };

  render() {
    const { classes, listItems, selectedItem, title } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="controlled-open-select">{title}</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={selectedItem}
            onChange={this.handleChange}
            inputProps={{
              name: "sort",
              id: "controlled-open-select"
            }}
          >
            {listItems.map(item => (
              <MenuItem key={item.path} value={`${item.path}`}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

SelectSort.propTypes = {
  classes: PropTypes.object.isRequired,
  handleChangeItem: PropTypes.func.isRequired,
  listItems: PropTypes.array.isRequired,
  selectedItem: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default withStyles(styles)(SelectSort);
