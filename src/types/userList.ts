export interface UserState {
  prosList: string[];
  consList: string[];
}
export enum UserActionTypes {
  PROS_LIST = "PROS_LIST",
  CONS_LIST = "CONS_LIST",
}
interface FetchProsList {
  type: UserActionTypes.PROS_LIST;
  payload: { index: number; value: string };
}

interface FetchConsList {
  type: UserActionTypes.CONS_LIST;
  payload: { index: number; value: string };
}

export type UserAction = FetchProsList | FetchConsList;
