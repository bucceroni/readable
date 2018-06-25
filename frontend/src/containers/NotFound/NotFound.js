import React, { Component } from "react";
import { Typography} from "@material-ui/core";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          404 - Sorry! Page not found
        </Typography>
      </div>
    );
  }
}

export default NotFound;
