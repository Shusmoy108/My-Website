import React from "react";
import { Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./contactStyle";
import PropTypes from "prop-types";

class Contact extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.body}>
          <Typography variant="h5" className={classes.title}>
            Contact Address
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.writing}>
            Shusmoy Chowdhury
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Lecturer, Department of Computer Science and Engineering
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Southern University Bangladesh, Chittagong, Bangladesh.
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Email: 1305108.sc@ugrad.cse.buet.ac.bd
          </Typography>
          <Typography variant="body1" className={classes.writing}>
            Contact Number: +880 1819648302
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
