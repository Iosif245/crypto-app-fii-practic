import { updateFundsRequest } from "./../../api/user-request";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { USER_FETCH__USERS, USER__SET_LOADING, USER__SET_USER, USER__SET_USERS } from "../constants";
import { getAllUsersRequest, getUserRequest } from "../../api/user-request";
import { mapUser, mapUsers } from "../../mappers/user-mapper";

export const setLoadingUserAction = createAction<boolean>(USER__SET_LOADING);
export const setUsersUserAction = createAction<IUsers>(USER__SET_USERS);
export const setUserUserAction = createAction<IUser>(USER__SET_USER);

export const fetchUsersAsyncAction = createAsyncThunk(USER_FETCH__USERS, async (__: never, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const usersResponse: IUsers = await getAllUsersRequest();
    const users = mapUsers(usersResponse);
    thunkApi.dispatch(setUsersUserAction(users));
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});

export const fetchUserAsyncAction = createAsyncThunk(USER_FETCH__USERS, async (userId: number, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: IUser = await getUserRequest(userId);
    const user = mapUser(userResponse);
    thunkApi.dispatch(setUserUserAction(user));
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});

export const updateFundsAsyncAction = createAsyncThunk(USER_FETCH__USERS, async ({ userId, funds }: { userId: number; funds: number }, thunkApi) => {
  thunkApi.dispatch(setLoadingUserAction(true));
  try {
    const userResponse: IUser = await updateFundsRequest(userId, funds);
    const user = mapUser(userResponse);
    thunkApi.dispatch(setUserUserAction(user));
  } catch (error) {
    console.error(error);
  } finally {
    thunkApi.dispatch(setLoadingUserAction(false));
  }
});
