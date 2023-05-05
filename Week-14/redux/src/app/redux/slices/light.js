import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: false,
};

const serviceSlice = createSlice({
  name: "lightReducer",
  initialState,
  reducers: {
    setLight(state, action) {
      state.light = action.payload;
    },
  },
});

const { setLight } = serviceSlice.actions;
export default serviceSlice.reducer;

export const setLightReduxServices = (state) => async (dispatch) => {
  dispatch(setLight(state));
};
