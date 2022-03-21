import React, { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Box, TextField } from "@mui/material";

const UserList: React.FC = () => {
  const { prosList } = useTypedSelector((state) => state.userList);
  const { fetchUsers } = useActions();
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
    fetchUsers(index, value as string);
  };

  return (
    <Box display="flax" width="400px" height="600px">
      <Box width="200px" height="100%">
        {prosList?.map((item, index, arr) =>
          index !== arr.length - 1 ? (
            <TextField
              id="standard-basic"
              label="Standard"
              variant="standard"
              value={item}
              onChange={(e) => {
                changeHandler(index, e);
              }}
            />
          ) : (
            <>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                autoFocus={autoFocusIndex === index}
                value={item}
                onChange={(e) => {
                  changeHandler(index, e);
                }}
              />
            </>
          )
        )}
        <TextField
          id="standard-basic"
          label="Standard"
          value=""
          variant="standard"
          onChange={(e) => {
            changeHandler(prosList.length, e);
          }}
        />
      </Box>
      <Box width="200px" height="100%"></Box>
    </Box>
  );
};

export default UserList;
