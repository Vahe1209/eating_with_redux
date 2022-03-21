export interface UserState {
  prosList: string[];
}
export enum UserActionTypes {
  PROS_LIST = "PROS_LIST",
}
interface FetchUsersAction {
  type: UserActionTypes.PROS_LIST;
  payload: { index: number; value: string };
}
export type UserAction = FetchUsersAction;
