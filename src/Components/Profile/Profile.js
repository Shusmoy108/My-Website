import React from "react";
import pp from "../../Assets/pp.jpg";
import cv from "../../Assets/CV.pdf";
import { CardMedia, Card, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./profileStyle";
import PropTypes from "prop-types";

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Work Experience
          </Typography>
          <Divider></Divider>
          <div style={{ display: "flex" }}>
            <div className={classes.writings}>
              <Typography className={classes.writings1}>
                Lecturer in Department of Computer Science and Engineering
              </Typography>

              <b className={classes.writings1}>
                Southern University Bangladesh
              </b>
            </div>
            <div className={classes.writings}>
              <Typography variant="body1" className={classes.writings2}>
                7 April 2019 - Present
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div className={classes.writings}>
              <Typography className={classes.writings1}>
                Full Stack Developer (Nodejs + React js)
              </Typography>

              <b className={classes.writings1}>BigGO Limited</b>
            </div>
            <div className={classes.writings}>
              <Typography variant="body1" className={classes.writings2}>
                5 April 2018 - 6 December 2018
              </Typography>
            </div>
          </div>
          <Typography variant="h5" className={classes.title}>
            Research Interest
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.research}>
            Software Engineering, Human Gesture Analysis, Research in UI/UX
            designing, Data Science, API analysis, Image Processing, Machine
            Learning,Testing software and Bug Fixing
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Education
          </Typography>
          <Divider></Divider>
          <b className={classes.writings1}>
            Bachelor of Science in Computer Science and Engineering
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Bangladesh University of Engineering and Technology, BUET, Dhaka
          </Typography>
          <b v className={classes.writings1}>
            Higher Secondary School Certificate in Science Group
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Chittagong College, Chittagong
          </Typography>

          <b className={classes.writings1}>
            Secondary School Certificate in Science Group
          </b>
          <Typography variant="body1" className={classes.writings1}>
            Chittagong Goverment High School, Chittagong
          </Typography>
          <Typography variant="h5" className={classes.title}>
            Skills
          </Typography>
          <Divider></Divider>
          <div className={classes.skill}>
            <b>Programming Languages : </b>
            Python, Java,JavaScript, C, C++, Assembly, DART.
          </div>
          <div className={classes.skill}>
            <b>Framework : </b>
            Flutter,Android, Django, Nodejs, React js,React native, Spring MVC,
            Spring Boot.
          </div>
          <div className={classes.skill}>
            <b>Database : </b>
            Relational Database, SQL Database, NoSQL Database, PostGRE SQL .
          </div>
          <div className={classes.skill}>
            <b>Scripting Languages : </b>
            LaTeX, Shell Scripts(Linux) .
          </div>
          <Typography variant="h5" className={classes.title}>
            Training
          </Typography>
          <Divider></Divider>
          <div className={classes.skill}>
            Training on Reverse Engineering (security related) by Critical
            Incidence Response Team (CIRT), Bangladesh Computer Council (BCC)
          </div>
          <b className={classes.skill}>
            Trainer: Dr. Desmond Devendran Alexander
          </b>

          <Typography variant="h5" className={classes.title}>
            Extra-Activities
          </Typography>
          <Divider></Divider>
          <div className={classes.skill}>
            <b>
              One of the main Organizer of BUET CSE Festival 2018
              <br />
            </b>
            It was a big event for BUET CSE department. We organized Inter
            University Programming competition (ACM ICPC style), Hack_A_Day
            (Inter University Hackathon), Inter Univeristy Robotics and IoT
          </div>
          <div className={classes.skill}>
            <b>
              President, BUET Computer Club <br />
            </b>
            We tried to build a connection between the students and the software
            industry
          </div>
          <div className={classes.skill}>
            <b>
              Vice-President, Badhon, Ahsanullah Hall BUET. <br />
            </b>
            It is a blood donation organization in BUET.
          </div>
          <Typography variant="h5" className={classes.title}>
            CV/Resume
          </Typography>
          <Divider></Divider>
          <div className={classes.skill}>
            You can find my complete CV{" "}
            <a href={cv} target="_blank" rel="noopener noreferrer">
              here
            </a>
          </div>
        </div>
        <div className={classes.img}>
          <Card>
            <CardMedia
              style={{ height: 400 }}
              //className={classes.media}
              image={pp}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
