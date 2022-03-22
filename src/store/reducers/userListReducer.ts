import { UserAction, UserActionTypes, UserState } from "../../types/userList";

const initialState: UserState = {
  prosList: [],
  consList: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.CONS_LIST:
      state.consList[action.payload.index] = action.payload.value;
      const cons = state.consList.filter((item) => item);
      return { consList: [...cons], prosList: state.prosList };
    case UserActionTypes.PROS_LIST:
      state.prosList[action.payload.index] = action.payload.value;
      const pros = state.prosList.filter((item) => item);
      return { prosList: [...pros], consList: state.consList };
    default:
      return state;
  }
};
