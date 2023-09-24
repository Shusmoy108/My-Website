/** @format */

import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './contactStyle';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.body}>
          <Typography variant='h5' className={classes.title}>
            Contact Address
          </Typography>
          <Divider></Divider>
          <Typography variant='body1' className={classes.writing}>
            Shusmoy Chowdhury
          </Typography>
          <Typography variant='body1' className={classes.writing}>
          Graduate Assistant, Department of Computer Science
          </Typography>
          <Typography variant='body1' className={classes.writing}>
          Missouri State University, Springfield, USA.
          </Typography>
          <Typography variant='body1' className={classes.writing}>
            Email: shusmoychowdhury.personal@gmail.com
          </Typography>
          <Typography variant='body1' className={classes.writing}>
            Contact Number: +1-417-576-4827
          </Typography>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}
Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
