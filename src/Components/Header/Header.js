import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import SendIcon from "@material-ui/icons/Send";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Home from "../Home/Home";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import styles from "./headerStyle";
import pp from "../../Assets/pp.jpg";
import {
  ListItem,
  List,
  Drawer,
  ExpansionPanel,
  Typography,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Popover,
  MenuItem,
  Avatar,
  Divider,
} from "@material-ui/core";
import Profile from "../Profile/Profile";
import Teaching from "../Teaching/Teaching";
import Contact from "../Contact/Contact";
import AcademicProject from "../Project/AcdemicProject";
import Webprojects from "../Project/Webproject";
import Mobileprojects from "../Project/Mobileproject";
import Research from "../Research/Research";

class Header extends React.Component {
  state = {
    anchor: false,
    page: 0,
    open: null,
  };
  handleClose = () => {
    this.setState({ anchorEl: null, project: null });
  };

  handleOpen = (event) => {
    this.setState({ open: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ open: null });
  };
  handleMenu = () => {
    this.setState({ anchor: !this.state.anchor });
  };
  handlePage = (value) => {
    this.setState({ anchor: false, page: value, open: null });
  };
  render() {
    const { classes } = this.props;
    const { open, anchor } = this.state;
    return (
      <div style={{ marginBottom: "2%" }}>
        <AppBar position="static" className={classes.sectionDesktop}>
          <Toolbar>
            <Button className={classes.item} onClick={() => this.handlePage(0)}>
              Home
            </Button>
            <Button className={classes.item} onClick={() => this.handlePage(1)}>
              Profile
            </Button>
            <Button className={classes.item} onClick={() => this.handlePage(2)}>
              Research
            </Button>
            <Button className={classes.item} onClick={() => this.handlePage(3)}>
              Teaching
            </Button>
            <Button
              className={classes.item}
              onClick={this.handleOpen}
              aria-haspopup="true"
              aria-owns={open ? "simple-menu" : null}
              //onClick={() => this.handleOpen()}
            >
              Project
            </Button>

            <Popover
              id="simple-menu"
              anchorEl={open}
              open={Boolean(open)}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              transformOrigin={{
                horizontal: "center",
                vertical: "top",
              }}
              onClose={this.handleClose}
            >
              <MenuItem
                className={classes.listItem}
                onClick={() => this.handlePage(5)}
              >
                <SendIcon /> Web Projects
              </MenuItem>
              <MenuItem
                className={classes.listItem}
                onClick={() => this.handlePage(6)}
              >
                <SendIcon /> Android Applications
              </MenuItem>
              <MenuItem
                onClick={() => this.handlePage(4)}
                className={classes.listItem}
              >
                <SendIcon />
                Academic Projects
              </MenuItem>
            </Popover>

            <Button className={classes.item} onClick={() => this.handlePage(7)}>
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        <AppBar position="fixed" className={classes.sectionMobile}>
          <Toolbar style={{ display: "flex" }}>
            <Button
              className={classes.menu}
              onClick={this.handleMenu}
              variant="outlined"
              color="default"
            >
              <MenuIcon />
            </Button>
            <Typography variant="h5" className={classes.title}>
              Shusmoy Chowdhury
            </Typography>
          </Toolbar>

          <Drawer
            anchor="left"
            open={anchor}
            onClose={this.handleMenu}
            className={classes.drawer}
          >
            <div className={classes.avater}>
              <Avatar
                alt="Shusmoy Chowdhury"
                src={pp}
                className={classes.large}
              />
            </div>
            <div className={classes.name}>Shusmoy Chowdhury</div>
            <Divider />
            <List
              style={{
                flex: 10,
              }}
            >
              <ListItem className={classes.list}>
                <Button
                  className={classes.listItem}
                  onClick={() => this.handlePage(0)}
                >
                  Home
                </Button>
              </ListItem>
              <ListItem className={classes.list}>
                <Button
                  className={classes.listItem}
                  onClick={() => this.handlePage(1)}
                >
                  Profile
                </Button>
              </ListItem>
              <ListItem className={classes.list}>
                <Button
                  className={classes.listItem}
                  onClick={() => this.handlePage(2)}
                >
                  Research
                </Button>
              </ListItem>
              <ListItem className={classes.list}>
                <Button
                  className={classes.listItem}
                  onClick={() => this.handlePage(3)}
                >
                  Teaching
                </Button>
              </ListItem>
              <ListItem>
                <ExpansionPanel style={{ boxShadow: "none" }}>
                  <ExpansionPanelSummary
                    style={{ padding: 0 }}
                    classes={{ content: classes.content }}
                  >
                    <Button
                      className={classes.listItem}
                      //onClick={() => this.handleOpen()}
                    >
                      Project
                      <ExpandMoreIcon />
                    </Button>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails style={{ padding: 0 }}>
                    <List>
                      <ListItem>
                        <Button
                          className={classes.listItem}
                          onClick={() => this.handlePage(5)}
                        >
                          Web Projects
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button
                          className={classes.listItem}
                          onClick={() => this.handlePage(6)}
                        >
                          Android Applications
                        </Button>
                      </ListItem>
                      <ListItem>
                        <Button
                          className={classes.listItem}
                          onClick={() => this.handlePage(4)}
                        >
                          Academic Projects
                        </Button>
                      </ListItem>
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </ListItem>

              <ListItem className={classes.list}>
                <Button
                  className={classes.listItem}
                  onClick={() => this.handlePage(7)}
                >
                  Contact
                </Button>
              </ListItem>
            </List>
          </Drawer>
        </AppBar>
        {this.state.page === 0 && <Home />}
        {this.state.page === 1 && <Profile />}
        {this.state.page === 2 && <Research />}
        {this.state.page === 3 && <Teaching />}
        {this.state.page === 4 && <AcademicProject />}
        {this.state.page === 5 && <Webprojects />}
        {this.state.page === 6 && <Mobileprojects />}
        {this.state.page === 7 && <Contact />}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
