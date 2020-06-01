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
                  In developing countries like Bangladesh the number of czerian
                  pregnancy cases are increasing day by day. With a vast of
                  number of paramerters in which the pregnancy mode is
                  dependent, we are trying to find the crucial factor in which
                  it depends the most. We are doing this reasearch based on the
                  ultrasonography reports along with some historical
                  factors(such as weight,age,diabetic etc). We have collected a
                  good number of reports from various pathologies in bangladesh.
                  Now we are tring to convert this data into binary
                  representation or control word. Our goal is to analyze this
                  binary representaion through different machine learning
                  algorithms and predict the correct mode of the pregnancy.
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  TuitionHub
                  <br />
                </b>
                <b className={classes.writings2}>
                  Supervisor: Dr. A. B. M. Alim Al Islam, Professor, BUET
                </b>
                <Typography variant="body1" className={classes.body}>
                  In developing countries like bangladesh the students below
                  university level mostly depends on the tutors for their
                  education. But nowadays it is dificult to find a suitable
                  teacher for the student. So we have developed an android
                  application where students and guardians can find their
                  suitable teacher for their students. Here we have a three type
                  of user Student, teacher and guarduian. Student and guardians
                  can advertise their tuition. On the other hand teacher can
                  find tuitions based on their requirement. There is a two way
                  rating system for the teachers and the students/guardians
                  through which we can analyse the eduacation quality of the
                  teachers as well as students/guardians. It is a combination of
                  human computer interaction and software engineering research
                  where we tried to analyze the human behaviour of the
                  guardians, students and teachers. We have tried to analyse the
                  education system of developing country like Bangladesh. We are
                  also trying to analyse the behaviour of the users based on
                  their area. Also we have done some UI/UX designing research
                  through which we can attract the maximum number of user in our
                  application. The android version of the application can be
                  found in the{" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=my.new.package"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    playstore.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
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
                  Now a Days Bengali is one of the most spoken language in the
                  world. Around 200 million people all over the world have been
                  speaking in this language.Being the 5th Posi- tion and
                  sweetest language in the world declared by the UNESCO Bengali
                  is the national language in Bangladesh and one of the major
                  languages in India. Bangla is a rich and old language.
                  Converting hard document, such as newspaper, printed book into
                  editable text to modify or extend is the normal practice
                  nowadays, OCR is the process of converting printed text images
                  into editable text. In our thesis work we have tried to make a
                  complete Optical Character Recognition for Bangla Text. In our
                  first thesis work we have introduced a new segmentation
                  technique for bangla text. The segmentation of bangla text is
                  not easy as other language because of many connecting word in
                  bangla. Moreover if the image is not taken straight the output
                  may be wrong. In our technique we first check if the image is
                  straight or rotated. If the image is rotated then we make it
                  straight and divide the text in many contours. We then segment
                  the words according to the threshold value of the page and
                  ignore the noise and punctuation of the page. Our technique
                  has given a 95% accuracy in segmenting bangla text For
                  generating text from the segmented words we use Convolution
                  Neural Network. At first we used no layer connected
                  Convolution Neural Network. But we got a poor accuracy of 45%
                  in this technique. Then we used fully connected Convolution
                  Layer with stride and dropout. We have used a lot of
                  activation function in our CNN to increase the accuracy level.
                  The Relu and No activation function has given a good accuracy
                  in CNN. We also used softmax cross entropy with logits as cost
                  function in the CNN. We used Stochastic gradient descent as
                  the optimizer in the CNN. We trained the machine with 1023
                  classes each having 50 different images of different fonts.
                  Our CNN has given an accuracy of 90.1%. We also used Recurrent
                  Neural Network to validate the sentences if they are grammati-
                  cally right or wrong. We LSTM cells in RNN to validate the
                  sentences. The complete research can be found{" "}
                  <a
                    href="https://github.com/Shusmoy108/OCR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here.
                    <br />
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>4</ListItemIcon>
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
