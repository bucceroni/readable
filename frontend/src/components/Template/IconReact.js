import React, { Component } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  svg: {
    fontSize: 24,
    width: "1em",
    height: "1em",
    paddingRight: "20px",
    display: "inline-block",
    fill: "currentColor",
    flexShrink: 0,
    transition: theme.transitions.create("fill", {
      duration: theme.transitions.duration.shorter
    })
  }
});

class IconReact extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.svg}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="#61dafb"
            d="M14.139 12c0 1.181-0.958 2.139-2.139 2.139s-2.139-0.958-2.139-2.139c0-1.181 0.958-2.139 2.139-2.139s2.139 0.958 2.139 2.139z"
          />
          <path
            fill="#61dafb"
            d="M6.008 16.255l-0.472-0.12c-3.518-0.889-5.536-2.398-5.536-4.139s2.018-3.25 5.536-4.139l0.472-0.119 0.133 0.468c0.408 1.395 0.872 2.582 1.424 3.718l-0.061-0.14 0.101 0.213-0.101 0.213c-0.492 0.997-0.956 2.184-1.321 3.413l-0.042 0.165-0.133 0.467zM5.317 8.95c-2.674 0.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046 0.384-1.215 0.785-2.223 1.247-3.197l-0.065 0.151c-0.398-0.824-0.799-1.832-1.133-2.871l-0.049-0.175zM17.992 16.255l-0.133-0.469c-0.408-1.394-0.872-2.58-1.425-3.715l0.061 0.138-0.101-0.213 0.101-0.213c0.492-0.997 0.956-2.183 1.322-3.412l0.042-0.166 0.133-0.468 0.473 0.119c3.517 0.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-0.473 0.12zM17.501 11.996c0.48 1.039 0.877 2.060 1.182 3.046 2.675-0.752 4.315-1.901 4.315-3.046s-1.641-2.294-4.315-3.046c-0.383 1.214-0.784 2.223-1.246 3.196l0.064-0.15z"
          />
          <path
            fill="#61dafb"
            d="M5.31 8.945l-0.133-0.467c-0.989-3.486-0.689-5.984 0.823-6.856 1.483-0.856 3.864 0.155 6.359 2.716l0.34 0.349-0.34 0.349c-0.86 0.893-1.655 1.861-2.371 2.89l-0.051 0.077-0.135 0.193-0.235 0.020c-1.406 0.113-2.697 0.329-3.948 0.645l0.163-0.035-0.472 0.119zM7.206 2.315c-0.268 0-0.505 0.058-0.705 0.173-0.994 0.573-1.17 2.565-0.485 5.253 0.908-0.214 2.011-0.391 3.135-0.494l0.098-0.007c0.671-0.948 1.344-1.778 2.067-2.561l-0.015 0.017c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-0.001 0-0.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-0.34-0.349 0.34-0.349c0.859-0.893 1.655-1.862 2.37-2.891l0.051-0.077 0.135-0.193 0.234-0.020c1.406-0.112 2.698-0.328 3.95-0.644l-0.163 0.035 0.472-0.119 0.134 0.468c0.987 3.484 0.688 5.983-0.824 6.854-0.337 0.194-0.741 0.308-1.171 0.308-0.012 0-0.024-0-0.035-0l0.002 0zM12.699 19.296c1.56 1.519 3.037 2.381 4.095 2.381h0.001c0.267 0 0.505-0.058 0.704-0.173 0.994-0.573 1.171-2.566 0.485-5.254-0.909 0.214-2.012 0.391-3.137 0.494l-0.098 0.007c-0.67 0.949-1.343 1.779-2.066 2.562l0.015-0.017z"
          />
          <path
            fill="#61dafb"
            d="M18.69 8.945l-0.472-0.119c-1.090-0.282-2.381-0.498-3.704-0.605l-0.083-0.005-0.234-0.020-0.135-0.193c-0.766-1.106-1.561-2.075-2.428-2.974l0.007 0.007-0.34-0.349 0.34-0.349c2.494-2.56 4.874-3.571 6.359-2.716 1.512 0.872 1.812 3.37 0.824 6.855l-0.134 0.468zM14.75 7.24c1.142 0.104 2.227 0.273 3.234 0.501 0.686-2.688 0.509-4.68-0.485-5.253-0.988-0.571-2.845 0.304-4.8 2.208 0.708 0.766 1.381 1.596 1.999 2.467l0.052 0.077zM7.206 22.677c-0.010 0-0.022 0-0.035 0-0.431 0-0.835-0.114-1.183-0.314l0.012 0.006c-1.512-0.871-1.812-3.369-0.823-6.854l0.132-0.468 0.472 0.119c1.155 0.291 2.429 0.496 3.785 0.609l0.235 0.020 0.134 0.193c0.767 1.106 1.563 2.075 2.429 2.976l-0.007-0.008 0.34 0.349-0.34 0.349c-1.898 1.95-3.728 3.023-5.151 3.023zM6.016 16.25c-0.686 2.688-0.509 4.681 0.485 5.254 0.987 0.563 2.843-0.305 4.8-2.208-0.707-0.766-1.381-1.596-2-2.468l-0.052-0.077c-1.222-0.11-2.325-0.287-3.401-0.533l0.168 0.032z"
          />
          <path
            fill="#61dafb"
            d="M12 16.878c-0.823 0-1.669-0.036-2.516-0.106l-0.235-0.020-0.135-0.193c-0.408-0.576-0.854-1.268-1.273-1.979l-0.077-0.143c-0.339-0.568-0.728-1.299-1.087-2.046l-0.079-0.182-0.1-0.213 0.1-0.213c0.438-0.929 0.826-1.659 1.243-2.371l-0.077 0.143c0.414-0.716 0.869-1.43 1.35-2.122l0.135-0.193 0.235-0.020c0.754-0.068 1.631-0.106 2.517-0.106s1.763 0.039 2.629 0.114l-0.112-0.008 0.234 0.020 0.134 0.193c0.882 1.249 1.721 2.675 2.439 4.17l0.078 0.18 0.101 0.213-0.101 0.213c-0.793 1.674-1.632 3.1-2.579 4.443l0.062-0.093-0.134 0.193-0.234 0.020c-0.847 0.070-1.694 0.106-2.517 0.106zM9.803 15.794c1.48 0.111 2.914 0.111 4.395 0 0.753-1.084 1.484-2.328 2.12-3.627l0.076-0.171c-0.71-1.469-1.441-2.713-2.259-3.893l0.062 0.095c-0.658-0.053-1.424-0.083-2.197-0.083s-1.539 0.030-2.297 0.090l0.1-0.006c-0.756 1.085-1.488 2.33-2.123 3.63l-0.074 0.168c0.713 1.47 1.444 2.714 2.26 3.895l-0.063-0.097z"
          />
        </svg>
      </div>
    );
  }
}

IconReact.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(IconReact);