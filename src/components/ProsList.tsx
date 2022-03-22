import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const useStyles = makeStyles<Theme>((theme: Theme) =>
  createStyles({
    fieldContainer: {
      display: "flex",
      fontSize: 20,
      alignItems: "center",
    },
  })
);

const ProsList: React.FC = () => {
  const classes = useStyles();
  const { prosList } = useTypedSelector((state) => state.userList);
  const { fetchPros } = useActions();
  const [autoFocusIndex, setAutoFocusIndex] = useState<number | null>(null);

  const changeHandler = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (index === prosList.length) {
      setAutoFocusIndex(index);
    } else {
      setAutoFocusIndex(null);
    }
    const value = e.target.value;
    fetchPros(index, value as string);
  };

  return (
    <Box display="flax">
      <Box>
        {prosList?.map((item, index, arr) =>
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
          <div>{prosList.length + 1}</div>
          <TextField
            id="standard-basic"
            label="Pros"
            value=""
            variant="standard"
            onChange={(e) => {
              changeHandler(prosList.length, e);
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default ProsList;
