import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./researchStyle";
import protrack from "../../Assets/ProTrack.pdf";
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
            Publication
          </Typography>
          <Divider></Divider>
          <List>
          <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Child Tracking and Hidden Activities Observation System through Mobile App(Accepted-2021)
                  <br />
                </b>
                <b className={classes.writings2}>
                  Author: Mohammad Jahangir Alam, Tanjia Chowdhury, Sohrab Hossain, Shusmoy Chowdhury and Tanmoy Das
                </b><br />
                <b className={classes.writings2}>
                  Journal: Indonesian Journal of Electrical Engineering and Computer Science
                </b>
                <Typography variant="body1" className={classes.body}>
                The world is changing rapidly due to information technology and all the people around the world are too much busy with their jobs, business, etc. to adjust to this race.Now, parents are giving more time at their business, office, jobs, etc. instead of passing time at home, but they always get worried and scared about their children due to abuse of Information Technology and law and order situation of the country. So parents are wanted to track and monitor their child’s activities and location from anywhere to resolve their pressure. But this is not possible for every parent to monitor their child physically due to many reasons. To solve the problem, this paper presents a system that will help parents to keep monitoring their child activities from anywhere using a mobile phone. This android app uses GPS and Mobile services to find the child location also it secretly stored all the call logs, SMS logs, contact lists, and accurate locations without knowing the children. Children assume that they are using Facebook, browsing the net or watching videos from youtube. It will not hamper any activities of the child. Parents can check all the activities of children using this app. 
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Smart Door Unlock System with Android App(Under Review-2021)
                  <br />
                </b>
                <b className={classes.writings2}>
                  Author: Jeenat Sultana, Shusmoy Chowdhury,Moynul Hasan Tushar and Md.Hemayet Uddin
                </b><br />
                <b className={classes.writings2}>
                  Journal: International Journal of Advanced Science and Technology
                </b>
                <Typography variant="body1" className={classes.body}>
                A room is secured when it is locked and especially when the lock is ensured not to unlock by an unauthorized person. There are many methods to lock and unlock a door such as face detection, voice recognition, speech recognition, use of password and pin code, biometric technology etc. where each method serves the purpose of digital keys. As the availability of android devices are increasing day by day, the digital keys are working by means of android apps. We implemented our system to accomplish two purposes. One is to assure authorization i.e. no unauthorized user can get access to the secured room. The other one is to transfer the authorization to an unauthorized person who needs the permission to access in case of emergency. To meet the first goal, we used face detection and speech recognition and used random one-time password for the second one. Both the ways are implemented in android apps and connected to the Arduino Nano via Bluetooth module. Additional devices were used to strengthen the security of the system by detecting forceful attack by the intruders. Our objective was to design the system with enhanced security and affordable cost
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                A Smart Security Solution to Prevent any Mischief with the Vehicles
                  <br />
                </b>
                <b className={classes.writings2}>
                  Author: Mohammad Jahangir Alam, Shusmoy Chowdhury, Dhiman Sarma, Sohrab Hossain, Anindita Chowdhury and Jia Raihan <br />
                </b>
                <b className={classes.writings2}>
                  Conference: International Conference on Information and Communication Technology for Sustainable Development (ICICT4SD 2021) <br />
                </b>
                
                <Typography variant="body1" className={classes.body}>
                Security issue has become one of the alarming
problems in the society. Many researchers are working
relentlessly to make solutions which can solve the various
security problem of the society. Vehicles are very common in
everyone’s life. Nowadays stealing vehicles is one of the
common incident in everyday life. So we need elements which
can ensure the safety of the vehicles. In our research we
worked to make a complete model using an Arduino, GSM &amp;
GPS to solve the security problem of the vehicles. The owner of
the vehicle can control the vehicle’s engine by sending
command through SMS system. If the owner can realized that
he/she is not started the vehicle, then the owner can sent back
the SMS to stop the vehicle, and also can check the location of
vehicle, and the device provide latitude longitude value of the
vehicle.
                
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant="h5" className={classes.title}>
            Current Research
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
                  Supervisor: Dr. A. B. M. Alim Al Islam, Professor, BUET <br />
                </b>
                <b className={classes.writings2}>
                  Partner: Ananya Bhattacharjee, Lecturer, Eastern University
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
          </List>
          <Typography variant="h5" className={classes.title}>
            Completed Research
          </Typography>
          <Divider></Divider>
          <List>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  ProTrack
                  <br />
                </b>
                <b className={classes.writings2}>
                  Web-Based Generic Project Management Software
                </b>
                <Typography variant="body1" className={classes.body}>
                  Every Project has a unique structure. The project manager or
                  leader is always responsible for the structure of the
                  project.Every project manager needs a suprime freedom of
                  choice for their project structure design. In our software we
                  have tried to give such freedom to the user. We have divided
                  every project into task and every task into subtask. In our
                  project we can add more depth according to user specification.
                  At first The project lead will create a project structure with
                  different number of task and every task with various number of
                  subtask. After designing the project structure user can create
                  project based on this project stracture and assigned task and
                  subtask according to theor requisition. The project lead can
                  also check the current status of the project(how much has been
                  completed) here. He can also rerun a faulty project and also
                  findout the fault through the system. In the end we can say
                  this system as a user specific generic project management
                  software. You can find all the detailed features{" "}
                  <a href={protrack} target="_blank" rel="noopener noreferrer">
                    here.
                    <br />
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Making Bangla OCR(Optical Character Recognition) for all
                  bangla fonts using CNN.
                  <br />
                </b>
                <b className={classes.writings2}>
                  Supervisor: Dr.Md Sohel Rahman, Professor, BUET
                  <br />
                </b>
                <b className={classes.writings2}>Partner: Sabab Awosaf, BUET</b>
                <Typography variant="body1" className={classes.body}>
                  Now a Days Bengali is one of the most spoken language in the
                  world. Around 200 million people all over the world have been
                  speaking in this language. In our thesis work we have tried to
                  make a complete Optical Character Recognition for Bangla Text.
                  In our first thesis work we have introduced a new segmentation
                  technique for bangla text. Our technique has given a 95%
                  accuracy in segmenting bangla text. For generating text from
                  the segmented words we use Convolution Neural Network We used
                  fully connected Convolution Layer with stride and dropout.We
                  trained the machine with 1023 classes each having 50 different
                  images of different fonts. Our CNN has given an accuracy of
                  90.1%. We also used Recurrent Neural Network to validate the
                  sentences if they are grammatically right or wrong. We LSTM
                  cells in RNN to validate the sentences. The complete research
                  can be found{" "}
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
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
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
