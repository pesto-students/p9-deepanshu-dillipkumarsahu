import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const serviceSlice = createSlice({
  name: "stepCounterReducer",
  initialState,
  reducers: {
    incrementCounter(state) {
      state.count += 1;
    },
    decrementCounter(state) {
      state.count -= 1;
    },
    resetCounter(state) {
      state.count = 0;
    },
  },
});

const { incrementCounter, decrementCounter, resetCounter } =
  serviceSlice.actions;
export default serviceSlice.reducer;

export const incrementCounterReduxServices = () => async (dispatch) => {
  dispatch(incrementCounter());
};

export const decrementCounterReduxServices = () => async (dispatch) => {
  dispatch(decrementCounter());
};

export const resetCounterReduxServices = () => async (dispatch) => {
  dispatch(resetCounter());
};
