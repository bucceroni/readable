import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import Icon from "@material-ui/core/Icon";
import IconHome from "./IconHome";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1
  })
});

function Post(props) {
  const { classes, title, author, commentCount, voteScore, body } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Grid container>
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            direction="column"
            justify="center"
            item
            xs={2}
          >
            <IconHome />
          </Grid>
          <Grid
            container
            wrap="nowrap"
            alignItems="flex-start"
            direction="column"
            justify="flex-start"
            item
            xs={10}
          >
            <Typography variant="title" gutterBottom>
              {title}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {author}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            direction="column"
            justify="center"
            item
            xs={2}
          >
            <Button mini color="primary" className={classes.button}>
              <ThumbUpIcon />
            </Button>
            <div>{voteScore}</div>
            <Button mini color="secondary" className={classes.button}>
              <ThumbDownIcon />
            </Button>
          </Grid>
          <Grid
            container
            wrap="nowrap"
            alignItems="flex-start"
            direction="column"
            justify="flex-start"
            item
            xs={9}
          >
            <Typography component="p">{body}</Typography>
          </Grid>
          <Grid
            container
            wrap="nowrap"
            alignItems="center"
            direction="column"
            justify="center"
            item
            xs={1}
          >
            <Icon
              className={classes.icon}
              color="primary"
              style={{ fontSize: 20 }}
            >
              message-reply-text
            </Icon>
            <div>{commentCount}</div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

Post.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired
};

export default withStyles(styles)(Post);
