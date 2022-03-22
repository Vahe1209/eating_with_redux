import { UserAction, UserActionTypes } from "../../types/userList";
import { Dispatch } from "redux";

export const fetchPros = (index: number, value: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.PROS_LIST,
      payload: { index, value },
    });
  };
};

export const fetchCons = (index: number, value: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.CONS_LIST,
      payload: { index, value },
    });
  };
};
