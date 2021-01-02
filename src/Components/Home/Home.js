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
            in Chittagong. I am always keen to explore new fields of Computer
            Science. My research interest mainly consists Software Engineering,
            Human Computer Interaction, Software Development, Health Informatics
            using Softwares. In my software research I am working with data
            mining and API anlayzing. I have worked in finding necessary data
            from websites using web crawling. Also I have also working with
            different datasets to find data patterns from the various kind of
            data. I am trying to combine the idea of both software Engineering
            and Human computer interaction. I am trying analyze the Human
            Psychology based on the software uses. We can detect the different
            community based on the different software uses of the user. Recently
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
