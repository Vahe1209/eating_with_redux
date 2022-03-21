import { UserAction, UserActionTypes, UserState } from "../../types/userList";

const initialState: UserState = {
  prosList: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.PROS_LIST:
      state.prosList[action.payload.index] = action.payload.value;
      const list = state.prosList.filter((item) => item);
      return { prosList: [...list] };
    default:
      return state;
  }
};
