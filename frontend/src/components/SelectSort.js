
  import React from 'react';
  import PropTypes from 'prop-types';
  import { withStyles } from '@material-ui/core/styles';
  import InputLabel from '@material-ui/core/InputLabel';
  import MenuItem from '@material-ui/core/MenuItem';
  import FormControl from '@material-ui/core/FormControl';
  import Select from '@material-ui/core/Select';

  const styles = theme => ({
    button: {
      display: 'block',
      marginTop: theme.spacing.unit * 2,
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
  });
  
  class SelectSort extends React.Component {
    state = {
      sort: '',
      open: false,
    };
  
    handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };
  
    handleOpen = () => {
      this.setState({ open: true });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="controlled-open-select">Sort</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.sort}
              onChange={this.handleChange}
              inputProps={{
                name: 'sort',
                id: 'controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'date'}>Date</MenuItem>
              <MenuItem value={'score'}>Vote Score</MenuItem>
            </Select>
          </FormControl>
        </form>
      );
    }
  }
  
  SelectSort.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SelectSort);