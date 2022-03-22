import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    fieldContainer: {
      display: "flex",
      fontSize: 20,
      alignItems: "center",
    },
  })
);

const ConsList: React.FC = () => {
  const classes = useStyles();
  const { consList } = useTypedSelector((state) => state.userList);
  const { fetchCons } = useActions();
  const [autoFocusIndex, setAutoFocusIndex] = useState<number | null>(null);

  const changeHandler = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (index === consList.length) {
      setAutoFocusIndex(index);
    } else {
      setAutoFocusIndex(null);
    }
    const value = e.target.value;
    fetchCons(index, value as string);
  };

  return (
    <Box display="flax">
      <Box>
        {consList?.map((item, index, arr) =>
          index !== arr.length - 1 ? (
            <div className={classes.fieldContainer}>
              <div>{index + 1}</div>
              <TextField
                id="standard-basic"
                variant="standard"
                value={item}
                onChange={(e) => {
                  changeHandler(index, e);
                }}
              />
            </div>
          ) : (
            <div className={classes.fieldContainer}>
              <div>{index + 1}</div>
              <TextField
                id="standard-basic"
                variant="standard"
                autoFocus={autoFocusIndex === index}
                value={item}
                onChange={(e) => {
                  changeHandler(index, e);
                }}
              />
            </div>
          )
        )}
        <div className={classes.fieldContainer}>
          <div>{consList.length + 1}</div>
          <TextField
            id="standard-basic"
            label="Cons"
            value=""
            variant="standard"
            onChange={(e) => {
              changeHandler(consList.length, e);
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default ConsList;
