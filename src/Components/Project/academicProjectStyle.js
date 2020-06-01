const styles = (theme) => ({
  root: {
    display: "block",
    //marginLeft: "5%",
    margin: "70px 5% 5% 5%",

    [theme.breakpoints.up("sm")]: {
      // display: "flex",
      display: "flex",
      marginTop: "2%",
    },
  },
  root2: {
    flex: 5,
    [theme.breakpoints.up("sm")]: {
      fontSize: 3,
    },
  },
  img: {
    flex: 2,
    marginRight: "2%",
  },
  grow: {
    flexGrow: 1,
  },
  writings: {
    flex: 2,
  },
  body: {
    fontSize: 12,
    textAlign: "justify",
    [theme.breakpoints.up("sm")]: {
      fontSize: 15,
    },
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: 20,
    // marginTop: "2%",
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
  },
  writings1: {
    fontFamily: "Arcon",
    //textAlign: "justify",
    fontsize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
  writings2: {
    fontFamily: "Arcon",
    fontsize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 17,
    },
  },
  research: {
    fontFamily: "Arcon",
    textAlign: "justify",
    fontsize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
  skill: {
    fontFamily: "Arcon",
    textAlign: "justify",
    fontsize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
});

export default styles;
