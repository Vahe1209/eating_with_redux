import { UserAction, UserActionTypes } from "../../types/userList";
import { Dispatch } from "redux";

export const fetchUsers = (index: number, value: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.PROS_LIST,
      payload: { index: index, value: value },
    });
  };
};
