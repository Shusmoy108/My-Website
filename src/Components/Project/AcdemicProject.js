import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./academicProjectStyle";
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@material-ui/core";
// const styles = {
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
// };

class AcademicProject extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Software Projects
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Home Rental System
                  <br />
                </b>
                <b className={classes.writings2}>
                  Technology: JAVA Spring Boot, Oracle{" "}
                </b>
                <Typography variant="body1" className={classes.body}>
                  The home rental system will be like a social media for the
                  tenant and flat owner so that the communication between them
                  will be very easy. Owners can be easily notify tenants with
                  various notification and tenant can also send their complain
                  through the system. There is also an advertisement section for
                  the flat owners. The tenant can easily book plat from this
                  site and can also rate his current flat.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Hospital Management System
                  <br />
                </b>
                <b className={classes.writings2}>
                  Technology: JAVA Server Page, Oracle{" "}
                </b>
                <Typography variant="body1" className={classes.body}>
                  A Hospital Management system with a admin and patients side,
                  where patients can use the facility provided by the hospital
                  and Admin can manage them.Patient Can also get appointment of
                  the doctors and the doctors can easily manage the
                  appointments.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  LAN Messenger
                  <br />
                </b>
                <b className={classes.writings2}>Technology: JAVA, JAVAFX </b>
                <Typography variant="body1" className={classes.body}>
                  Lan messenger for the simple user where they can also send
                  files along with chating.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>4</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Two Cars !!!
                  <br />
                </b>
                <b className={classes.writings2}>Technology: C, IGRAPHICS </b>
                <Typography variant="body1" className={classes.body}>
                  A desktop application where a player had to control two cars
                  using the keys. They have some obstacle to avoid and some
                  points to gain.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h5" className={classes.title}>
            Hardware Projects
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  IoT Based Smart Prayer Time Management System
                  <br />
                </b>
                <b className={classes.writings2}>
                  Technology: Arduino, Wifi Module, Sensors{" "}
                </b>
                <Typography variant="body1" className={classes.body}>
                  An intelligent smart prayer time management system, where an
                  attendant need not update the prayer time manually, rather it
                  takes automatic update or he can update from any part of the
                  country..
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  SPORSHOHIN: A Touchless Low Cost and Robust Finger Counting
                  Device Exploiting Visible Light.
                  <br />
                </b>
                <b className={classes.writings2}>
                  Technology: ATMEGA32, IR sensor
                </b>
                <Typography variant="body1" className={classes.body}>
                  A micro controller based embedded system that can count finger
                  at different lighting condition. The goal of the project is to
                  use the optimal amount of sensor(one sensor) for finger
                  counting and develop touchless device. country..
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

AcademicProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AcademicProject);
