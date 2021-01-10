import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import theme from '../src/theme';

interface Props extends WithStyles<typeof styles> {
  children?: React.ReactNode;
  className?: string;
}

// We can inject some CSS into the DOM.
const styles = {
  root: {
    background: theme.palette.primary.main,
    borderRadius: 3,
    border: 0,
    color: 'white',
    '&:hover': {
      background: theme.palette.primary.dark
    }
  },
};

function ClassNames(props: Props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </Button>
  );
}

export default withStyles(styles)(ClassNames);
