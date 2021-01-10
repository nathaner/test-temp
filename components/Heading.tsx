import React from 'react';
import clsx from 'clsx';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import theme from "../src/theme"

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

// We can inject some CSS into the DOM.
const styles = {
  root: {
    color: theme.palette.primary.main,
    height: 48,
  },
};

function ClassNames(props: Props) {
  const { classes, children, className, ...other } = props;

  return (
    <Typography
      variant="h2"
      className={clsx(classes.root, className)}
      {...other}
    >
      {children || 'class names'}
    </Typography>
  );
}

export default withStyles(styles)(ClassNames);
