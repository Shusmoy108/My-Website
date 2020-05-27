import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./researchStyle";
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

class Research extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Year 2020
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Pregnancy Mode Detaction
                  <br />
                </b>
                <b className={classes.writings2}>
                  Partner: Arif Hasan Chowdhury, Lecturer, Southern University
                  Bangladesh
                </b>
                <Typography variant="body1" className={classes.body}>
                  An android application where students and guardians can find
                  their suitable teacher for their students.It is a human
                  computer interaction research where we tried to analyze the
                  human behaviour of the guardians, students and teachers. We
                  have tried to analyse the education system of developing
                  country like Bangladesh. we are also trying to analyse the
                  behaviour of the users based on their area.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h5" className={classes.title}>
            Year 2019
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  TuitionHub
                  <br />
                </b>
                <b className={classes.writings2}>
                  Supervisor: Dr. A. B. M. Alim Al Islam, Professor, BUET
                </b>
                <Typography variant="body1" className={classes.body}>
                  An android application where students and guardians can find
                  their suitable teacher for their students.It is a human
                  computer interaction research where we tried to analyze the
                  human behaviour of the guardians, students and teachers. We
                  have tried to analyse the education system of developing
                  country like Bangladesh. we are also trying to analyse the
                  behaviour of the users based on their area.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h5" className={classes.title}>
            Year 2018
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Making Bangla OCR(Optical Character Recognition) for all
                  bangla fonts using CNN.
                  <br />
                </b>
                <b className={classes.writings2}>
                  Supervisor: Dr.Md Sohel Rahman, Professor, BUET
                </b>
                <Typography variant="body1" className={classes.body}>
                  We have tried to make a complete OCR for bangla language. Our
                  system will generate a text file of the images of the printed
                  documents. We also found a new technique of segmenting bangla
                  words.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Dual-Sim
                  <br />
                </b>
                <b className={classes.writings2}>
                  Supervisor: Dr. A. B. M. Alim Al Islam, Professor, BUET
                </b>
                <Typography variant="body1" className={classes.body}>
                  It is an android app to make low cost phone calls. When we
                  make a call the app will automatically choose the sim operator
                  which will cost less. The call rate will be taken from the sim
                  websites through web scrawling.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}

Research.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Research);
