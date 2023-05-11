import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type AuthState = {
  refreshToken: string | undefined;
  resetToken: string | undefined;
  verifyToken: string | undefined;
  username: string | undefined;
};
const slice = createSlice({
  name: "auth",
  initialState: {
    refreshToken: undefined,
    username: undefined,
    resetToken: undefined,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { refreshToken } }: PayloadAction<{ refreshToken: string }>
    ) => {
      state.refreshToken = refreshToken;
      localStorage.setItem("_expense_tracker_tkn_", refreshToken);
    },
    tokenUpdated: (state) => {
      return state;
    },
    setForgetData: (
      state,
      { payload: { username } }: PayloadAction<{ username: string }>
    ) => {
      state.username = username;
    },
    setResetPasswordToken: (
      state,
      { payload: { resetToken } }: PayloadAction<{ resetToken: string }>
    ) => {
      state.resetToken = resetToken;
    },
    setVerificationToken: (
      state,
      { payload: { verifyToken } }: PayloadAction<{ verifyToken: string }>
    ) => {
      state.verifyToken = verifyToken;
    },
    removeCredentials: (state) => {
      state.refreshToken = undefined;
      localStorage.removeItem("_expense_tracker_tkn_");
    },
  },
});
export const {
  setCredentials,
  tokenUpdated,
  setForgetData,
  setResetPasswordToken,
  setVerificationToken,
  removeCredentials,
} = slice.actions;
export default slice.reducer;
