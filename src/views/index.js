import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonLink from '../components/mui-next-button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function IndexPage(props) {
  const { classes } = props;
  return (
    <>
      <Button 
        component={ButtonLink} 
        href={'/my-bill'}
        variant="contained" 
        color="primary" 
        className={classes.button}
      >Login</Button>
    </>
  );
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);