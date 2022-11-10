/** @format */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';

import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Divider } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    //position: "fixed",
    width: '100%',
    backgroundColor: 'grey',
    marginTop: 'auto',

    bottom: 0,
  },

  copyright: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Cinzel',
    //padding: ".5% 0",
  },
  email: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Arcon',
    //padding: ".5% 0",
  },
});

class Footer extends Component {
  handleGetCatalog = () => {};
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.copyright}>Shusmoy Chowdhury</Typography>
        <Typography className={classes.email}>
          Email: shusmoychowdhury.personal@gmail.com
        </Typography>
        <div className={classes.copyright}>
          <IconButton>
            <a
              href='https://github.com/Shusmoy108'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'inherit' }}
            >
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton>
            <a
              href='https://www.linkedin.com/in/shusmoy-chowdhury-889b95139'
              target='_blank'
              rel='noopener noreferrer'
              style={{ color: 'inherit' }}
            >
              <LinkedInIcon />
            </a>
          </IconButton>
        </div>

        <Divider
          style={{
            backgroundColor: 'white',
            marginTop: '1%',
            marginLeft: '1%',
            width: '98%',
          }}
        />
        <Typography className={classes.copyright}>
          @Copyright Shusmoy Chowdhury 2022
        </Typography>
      </div>
    );
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
