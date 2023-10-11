export const handleAuthPending = state => {
  state.isFetching = true;
};
export const handleAuthFulfilled = (state, { payload }) => {
  state.isLoggedIn = true;
  state.user = payload.user;
  state.token = payload.token;
};

export const handleAuthRejected = (state, { payload }) => {
  state.error = payload;
};
