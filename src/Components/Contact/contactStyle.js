const styles = (theme) => ({
  root: {
    display: "block",
    margin: "70px 5% 5% 5%",

    [theme.breakpoints.up("sm")]: {
      display: "flex",
      //marginLeft: "5%",
      marginTop: "2%",
    },
  },
  grow: {
    flexGrow: 1,
  },
  body: {
    flex: 5,
  },
  writing: {
    margin: "0%",
    textAlign: "justify",
    fontsize: 20,
    [theme.breakpoints.up("sm")]: {
      margin: "2%",
    },
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: 25,
  },
});

export default styles;
