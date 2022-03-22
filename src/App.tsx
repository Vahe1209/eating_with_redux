import React from "react";
import ProsList from "./components/ProsList";
import ConsList from "./components/ConsList";
import { Box } from "@mui/material";
import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    lists: {
      display: "inline-flex",
    },
    header: {
      fontSize: 50,
      display: "flex",
      backgroundColor: "grey",
      border: "1px solid black",
      fontWeight: 700,
    },
    container: {
      border: "1px solid black",
      width: "50%",
      marginTop: 40,
    },
    list: {
      width: 290,
      borderLeft: "1px solid black",
      margin: 0,
    },
  })
);

const App = () => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <header className={classes.header}>Should I it at McDonalds</header>
        <div className={classes.lists}>
          <div className={classes.list}>
            <Box
              sx={{
                height: 40,
                borderBottom: "1px solid black",
                textAlign: "center",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              Pros
            </Box>
            <Box>
              <ProsList />
            </Box>
          </div>
          <div className={classes.list}>
            <Box
              sx={{
                height: 40,
                borderBottom: "1px solid black",
                textAlign: "center",
                fontSize: 30,
                fontWeight: 700,
              }}
            >
              Cons
            </Box>
            <Box>
              <ConsList />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
