const styles = (theme) => ({
  root: {
    display: "block",
    // marginLeft: "5%",
    // marginTop: "2%",
    margin: "70px 5% 5% 5%",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      marginLeft: "5%",
      marginTop: "2%",
    },
  },
  grow: {
    flexGrow: 1,
  },
  body: {
    flex: 5,
  },
  elementRoot: {
    display: "flex",
    flexDirection: "column",
  },
  element: {
    display: "flex",
    flex: 1,
    margin: "2%",
  },
  courceCode: {
    flex: 2,
    [theme.breakpoints.up("md")]: {
      flex: 1,
    },
  },
  courceName: {
    flex: 4,
    fontFamily: "Arcon",
    fontSize: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 17,
    },
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: 20,
  },
});

export default styles;
