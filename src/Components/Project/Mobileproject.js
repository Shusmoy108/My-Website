import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./webProjectStyle";
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";

class Mobileprojects extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Mobile Applications
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  BloodDonor
                  <br />
                </b>
                <b className={classes.writings2}>Framework: Flutter</b>
                <Typography variant="body1" className={classes.body}>
                  An android application where user can find the bloods in
                  emergency. The Beta version is using in the Chittagong Region.
                  We are working to integrate the google map in the app so that
                  it can be more user friendly.You can find the project{" "}
                  <a
                    href="https://github.com/Shusmoy108/Blood-Donor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Class Attendant
                  <br />
                </b>
                <b className={classes.writings2}>Framework: Flutter</b>
                <Typography variant="body1" className={classes.body}>
                  An android application where teachers can easily take their
                  attendance of diferent courses also generate the attendance
                  sheet from the app. The teacher can check the class attendance
                  graph of the individual students of each course and analyze
                  the class rate of the course.You can find the project{" "}
                  <a
                    href=" https://github.com/Shusmoy108/Class-Attendant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Coffeeshop
                  <br />
                </b>
                <b className={classes.writings2}>Framework: Flutter </b>
                <Typography variant="body1" className={classes.body}>
                  An android prototype application for any coffee shop where the
                  coffee shop owner can manage the orders and manage shop
                  promotions through this application. The prototype is inspired
                  by ”StarBucks App”.You can find the project code{" "}
                  <a
                    href="https://github.com/Shusmoy108/coffee-shop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>4</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Sales software and Business Statistics
                  <br />
                </b>
                <b className={classes.writings2}>Framework: Native Android</b>
                <Typography variant="body1" className={classes.body}>
                  An android application for the salesman of the multinational
                  product company to remove the use of papers by cloud so that
                  we can decrease the data loss. The company can get the
                  regional report, are report, and different type of statistics
                  instantly through the app.You can find the project code{" "}
                  <a
                    href="https://github.com/Shusmoy108/Android-Salesman"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <div className={classes.footer}>
            NB: You can run this applications on your android phone. The APK of
            this applications will be found{" "}
            <a
              href="https://drive.google.com/drive/folders/17l6oiTXDcWW5zJq_OqaQdQuSjyqI7Xj9?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Mobileprojects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mobileprojects);
