const styles = (theme) => ({
  sectionDesktop: {
    display: "none",
    backgroundColor: "black",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "block",
    backgroundColor: "black",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  img: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      flex: "1",
    },
  },
  title: {
    fontFamily: "Cinzel",
    fontSize: 20,
    flex: 4,
    textAlign: "center",
  },
  item: {
    fontFamily: "Cinzel",
    flex: 1,
    color: "white",
    textAlign: "center",
    fontSize: 20,
    [theme.breakpoints.between("sm", "md")]: {
      fontSize: 15,
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  avater: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    fontFamily: "Cinzel",

    color: "black",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 15,
  },
  name: {
    fontFamily: "Cinzel",

    color: "black",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 5,
    fontSize: 12,
  },
  content: {
    flexGrow: 0,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //flexDirection: "column",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menu: {
    color: "white",
    flex: 1,
  },
  drawer: {
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
