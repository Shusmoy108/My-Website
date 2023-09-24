import React from "react";
import pp from "../../Assets/pp.jpg";
import { CardMedia, Card, Typography, Divider } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./homeStyle";
import PropTypes from "prop-types";

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.img}>
          <Card>
            <CardMedia
              style={{ height: 240 }}
              //className={classes.media}
              image={pp}
              title="Contemplative Reptile"
            />
          </Card>
        </div>
        <div className={classes.writings}>
          <Typography variant="h5" className={classes.title}>
            About Me
          </Typography>
          <Divider></Divider>
          <Typography variant="body1" className={classes.writings1}>
            
            My name is Shusmoy Chowdhury. I have completed my Bachelor of
            Science in Computer Science and Engineering from{" "}
            <a
              href="https://www.buet.ac.bd/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Bangladesh University of Enigineering and Technology
            </a>{" "}
            Bangladesh University of Enigineering and Technology on October
            2018. After my graduation I had joined as a full stack developer in
            startup company named "BigGO Limited". At present I am serving as a
            Faculty member of{" "}
            <a
              href="https://www.southern.edu.bd/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Southern University Bangladesh
            </a>{" "}
            in Chittagong. I am always passionate about building new stuff. As a 
            result I joined in the software industry as Software Engineer(Lead) {" "}
            <a
              href="https://www.girmairi.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
               Girmairi LLC
            </a>{" "}
           . I am currently working here. I have worked in the software development as 
           well as the deployment of the product. I am always keen to explore new
            fields of Computer Science. So I went to pursue Master's of Computer Science degree
             in {" "}
             <a
              href="https://missouristate.edu/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Missouri State University
            </a>{" "}
             . I am admitted in a fully funded master's program by the department. 
             I am doing my research on cloud computing specifically in Load Balancing 
             and Datacenter Selection Policy. Currently I am residing in USA.
              I am looking for full time software engineer positions in USA or Canada.
               Recently
            I have started working with blockchain technology and
            cryptocurrency. In leisure time I work in devlopment of different
            kind of softwares. Some of my work can be found in my{" "}
            <a
              href="https://github.com/Shusmoy108"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile.
            </a>
          </Typography>
          <Typography variant="body1" className={classes.writings2}>
            Apart from academic activities, I like to travel-meet different
            types of people and taste different types of foods. In my free
            times, I like to make outings with my friends and family.
          </Typography>
        </div>
        <div className={classes.grow}></div>
      </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
