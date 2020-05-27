const styles = (theme) => ({
  root: {
    display: "flex",
    marginLeft: "5%",
    marginTop: "2%",
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
