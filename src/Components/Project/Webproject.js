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

class WebProject extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root2}>
          <Typography variant="h5" className={classes.title}>
            Website Projects
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Science Pathshala
                  <br />
                </b>
                <b className={classes.writings2}>Framework: PHP and React js</b>
                <Typography variant="body1" className={classes.body}>
                  It is an online education platform where students can take
                  preparation for their SSC, HSC examination. There are also
                  multiple events and competition where students of all kind can
                  participate. Moreover the students can post their problems in
                  the discussion center and get a quick solution of the
                  problem.You can find the project{" "}
                  <a
                    href="https://sciencepathshalabd.com/"
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
                  Online Registration System of National English Carnival
                  <br />
                </b>
                <b className={classes.writings2}>
                  Framework: Node js and React js
                </b>
                <Typography variant="body1" className={classes.body}>
                  It is an online registration system for 5th National English
                  Carnival organized by NDEC.The participant can register in the
                  event and participate in different compe- tition. His/Her
                  admit card will be sent to his email id through our system.
                  One participant cen register only once through his/her email
                  id.You can find the project{" "}
                  <a
                    href=" http:/registration.ndec.club/"
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
                  Hotel Booking System
                  <br />
                </b>
                <b className={classes.writings2}>Framework: Django </b>
                <Typography variant="body1" className={classes.body}>
                  In our site user can easily compare the price of different
                  hotels and book hotel rooms. One can also book restaurants
                  from this site. The price of the hotel rooms and restaurants
                  are taken from the hotel and restaurant website through
                  parsing.You can find the project code{" "}
                  <a
                    href="https://github.com/Shusmoy108/Hotel-Management"
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
                  MenuCard
                  <br />
                </b>
                <b className={classes.writings2}>
                  Framework: Node js and Handlebars
                </b>
                <Typography variant="body1" className={classes.body}>
                  It will show the menu card of the various restaurants. This
                  page will be generated in the runtime based on the food
                  category and data of the resturant and will be different for
                  various resturant. People can easily order food through this
                  software. the server will get the data of the ordered
                  items.You can find the project code{" "}
                  <a
                    href="https://github.com/Shusmoy108/Menucard"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>5</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  PhotoGallery
                  <br />
                </b>
                <b className={classes.writings2}>
                  Framework: Node js and React js
                </b>
                <Typography variant="body1" className={classes.body}>
                  It is a simple project. In this software people can add image
                  in the server. Other users can also comment in the images. The
                  uploader can only delete the unwanted comment.You can find the
                  project code{" "}
                  <a
                    href="https://github.com/Shusmoy108/PhotoGallery"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>6</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Blog
                  <br />
                </b>
                <b className={classes.writings2}>
                  Framework: Node js and React js
                </b>
                <Typography variant="body1" className={classes.body}>
                  It is a simple project. In this software people can write blog
                  on different topics. The reader can also comment in the blog.
                  The blog writter can only delete the unwanted comment.You can
                  find the project code{" "}
                  <a
                    href="https://github.com/Shusmoy108/Blog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

WebProject.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebProject);
