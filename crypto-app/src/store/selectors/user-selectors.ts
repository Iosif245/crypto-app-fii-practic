import { RootState } from "..";

export const userSelector = (state: RootState) => state.user.user;
export const usersSelector = (state: RootState) => state.user.users;
export const isLoadingUserSelector = (state: RootState) => state.user.loading;
