import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authService from './auth-service';

export const loginThunk = createAsyncThunk('user/login', async credentials => {
  const user = await authService.login(credentials);
  return user;
});
export const profileThunk = createAsyncThunk('user/profile', async () => {
  const response = authService.profile();
  return response;
});
export const logoutThunk = createAsyncThunk('user/logout', async () => {
  return await authService.logout();
});
export const updateUserThunk = createAsyncThunk('user/updateUser', async user => {
  await authService.updateUser(user);
  return user;
});
export const registerThunk = createAsyncThunk('user/register', async credentials => {
  const user = await authService.register(credentials);
  return user;
});
