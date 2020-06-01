const styles = (theme) => ({
  root: {
    display: "block",
    margin: "70px 5% 5% 5%",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginLeft: "5%",
      marginTop: "2%",
    },
  },
  img: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      flex: 1,
    },
  },
  grow: {
    flexGrow: 1,
  },
  writings: {
    flex: 3,
    [theme.breakpoints.up("sm")]: {
      marginLeft: "5%",
    },
    //marginLeft: "5%",
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: 20,
    [theme.breakpoints.up("md")]: {
      fontSize: 25,
    },
  },
  writings1: {
    textAlign: "justify",
    fontsize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
  writings2: {
    textAlign: "justify",
    fontsize: 15,
    marginTop: "2%",
    [theme.breakpoints.up("md")]: {
      fontSize: 18,
    },
  },
});

export default styles;
