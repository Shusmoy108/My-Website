/** @format */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './researchStyle';
import protrack from '../../Assets/ProTrack.pdf';
import smartdoor from '../../Assets/smartdoor.pdf';
import {
  Typography,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';

class Research extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.grow}></div>

        <div className={classes.root2}>
          <Typography variant='h5' className={classes.title}>
            Publication
          </Typography>
          <Divider></Divider>
          <List>
          <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>1</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Optimization of Datacenter Selection Policy in Cloud Computing using Differential Evolution Algorithm{' '}
                  <a
                    href='https://ieeexplore.ieee.org/abstract/document/10207510'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [Paper Link]
                  </a>
                  <br />
                </b>

                <b className={classes.writings2}>
                  Conference:IEEE Cloud Summit 2023
                </b>
             
              </ListItemText>
            </ListItem>
          <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>2</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Optimal Datacenter Selection for Cloud Services Using Swarm Intelligence{' '}
                  <a
                    href='https://ieeexplore.ieee.org/abstract/document/10152594'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [Paper Link]
                  </a>
                  <br />
                </b>

                <b className={classes.writings2}>
                  Conference:IEEE International Conference on Computer Supported Cooperative Work in Design 2023(CSCWD)
                </b>
             
              </ListItemText>
            </ListItem>
          <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>3</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                Genetic Algorithm Based Service Broker Policy to
find Optimal Datacenters in Cloud Services{' '}
                  <a
                    href='https://ieeexplore.ieee.org/abstract/document/10154791'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [Paper Link]
                  </a>
                  <br />
                </b>

                <b className={classes.writings2}>
                  Conference:IEEE IInternational Conference on Cloud Computing and Big Data Analytics 2023(ICCBDA)
                </b>
             
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>4</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Threshold Based Load Balancing Algorithm in Cloud
                  Computing {' '}
                  <a
                    href='https://ieeexplore.ieee.org/document/9898097'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [Paper Link]
                  </a>
                  <br />
                </b>

                <b className={classes.writings2}>
                  Conference:IEEE International Conference on Joint Cloud
                  Computing 2022(JCC)
                </b>
             
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>5</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  Child Tracking and Hidden Activities Observation System
                  through Mobile App{' '}
                  <a
                    href='http://ijeecs.iaescore.com/index.php/IJEECS/article/view/23612'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [Paper Link]
                  </a>
                  <br />
                </b>

                <b className={classes.writings2}>
                  Journal: Indonesian Journal of Electrical Engineering and
                  Computer Science
                </b>
                
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon style={{ fontSize: 20 }}>6</ListItemIcon>
              <ListItemText>
                <b className={classes.writings1}>
                  A Smart Security Solution to Prevent any Mischief with the
                  Vehicles{" "}
                  <a
                    href='https://ieeexplore.ieee.org/abstract/document/9550811'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [Paper Link]
                  </a>
                  <br />
                </b>

                <b className={classes.writings2}>
                  Conference: IEEE International Conference on Information and
                  Communication Technology for Sustainable Development 2021 (TENSYMP) <br />
                </b>

              </ListItemText>
            </ListItem>
           
           
          </List>
          <Typography variant='h5' className={classes.title}>
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
                <Typography variant='body1' className={classes.body}>
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
                <Typography variant='body1' className={classes.body}>
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
                  found in the{' '}
                  <a
                    href='https://play.google.com/store/apps/details?id=my.new.package'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    playstore.
                  </a>
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
          <Typography variant='h5' className={classes.title}>
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
                <Typography variant='body1' className={classes.body}>
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
                  software. You can find all the detailed features{' '}
                  <a href={protrack} target='_blank' rel='noopener noreferrer'>
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
                <Typography variant='body1' className={classes.body}>
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
                  can be found{' '}
                  <a
                    href='https://github.com/Shusmoy108/OCR'
                    target='_blank'
                    rel='noopener noreferrer'
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
                <Typography variant='body1' className={classes.body}>
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
