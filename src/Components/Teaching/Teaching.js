import React from "react";

import { Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./teachingStyle";
import PropTypes from "prop-types";
class Teaching extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>
        
        <div className={classes.body}>
        <Typography variant="h5" className={classes.title}>
            Fall 2020
          </Typography>
          <Divider></Divider>
          <div className={classes.elementRoot}>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 2210</div>
              <div className={classes.courceName}>
              Algorithm Design and Analysis(with Sessional)
              </div>
            </div>

            <div className={classes.element}>
              <div className={classes.courceCode}>CS 4103</div>
              <div className={classes.courceName}>
                Computer Graphics(with Sessional)
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 2207</div>
              <div className={classes.courceName}>
              Digital Logic Design(with Sessional)
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 3205</div>
              <div className={classes.courceName}>
              Theory of Computing
              </div>
            </div>
          </div>

          <Typography variant="h5" className={classes.title}>
            Spring 2020
          </Typography>
          <Divider></Divider>
          <div className={classes.elementRoot}>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 1101</div>
              <div className={classes.courceName}>
                Computer Basics and Programming Concepts(with Sessional)
              </div>
            </div>

            <div className={classes.element}>
              <div className={classes.courceCode}>CS 4103</div>
              <div className={classes.courceName}>
                Computer Graphics(with Sessional)
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 2201</div>
              <div className={classes.courceName}>
                Database Management System(with Sessional)
              </div>
            </div>
          </div>

          <Typography variant="h5" className={classes.title}>
            Spervising Projects
          </Typography>
          <Divider></Divider>
          <div className={classes.elementRoot}>
            <div className={classes.element}>
              <div className={classes.courceCode}>Project Name:</div>
              <div className={classes.courceName}>
                Home-Pharma (Online Medicine Ordering System)
              </div>
            </div>

            <div className={classes.element}>
              <div className={classes.courceCode}>Student Names:</div>
              <div className={classes.courceName}>
                Aminul Islam Turjo, Ismail Hossain
              </div>
            </div>
            <div className={classes.element}>
              <div className={classes.courceCode}>Project Details:</div>
              <div className={classes.courceName}>
                A web based software where user can see the nearest medicine
                shop in the map as like as UBER vehicles. He can choose the
                medicine shop from the map and place his order through image of
                the prescription or text file. He can also place his order
                randomly. Any medicine shop owner can accept his order by
                checking the availability of the medicine. We are following
                techniques used in UBER for this app. The demo link of the
                project is{" "}
                <a
                  href="http://homepharma.unaux.com/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  here.
                  <br />
                </a>
                We have also designed am admin panel for the pharmacy owner.
                They can accept the orders, update their pharmacy status(like
                medicine available, update price etc). They can also see the
                monthly or yearly revenue of the pharmacy through ours system.
                One can easily maintain a pharmacy chain store through using our
                software.
              </div>
            </div>
          </div>

          <Typography variant="h5" className={classes.title}>
            Fall 2019
          </Typography>
          <Divider></Divider>
          <div className={classes.elementRoot}>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 1101</div>
              <div className={classes.courceName}>
                Computer Basics and Programming Concepts(with Sessional)
              </div>
            </div>

            <div className={classes.element}>
              <div className={classes.courceCode}>CS 4205</div>
              <div className={classes.courceName}>
                Robotics and Computer Vision
              </div>
            </div>
          </div>

          <Typography variant="h5" className={classes.title}>
            Spring 2019
          </Typography>
          <Divider></Divider>
          <div className={classes.elementRoot}>
            <div className={classes.element}>
              <div className={classes.courceCode}>CS 3105</div>
              <div className={classes.courceName}>
                Operating System(with Sessional)
              </div>
            </div>

            <div className={classes.element}>
              <div className={classes.courceCode}>CS 4205</div>
              <div className={classes.courceName}>
                Robotics and Computer Vision
              </div>
            </div>
          </div>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}
Teaching.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Teaching);
