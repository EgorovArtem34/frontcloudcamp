import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProgressBarStateType } from '../types';

const initialState: ProgressBarStateType = {
  activeStep: 1,
  finishedSteps: [],
};

const progressBarSlice = createSlice({
  name: 'progressBar',
  initialState,
  reducers: {
    setActiveStep(state, { payload }: PayloadAction<number>) {
      state.activeStep = payload;
    },
    addFinishedStep(state, { payload }: PayloadAction<number>) {
      state.finishedSteps = [...state.finishedSteps, payload];
    },
    resetProgressBar(state) {
      state.finishedSteps = [];
      state.activeStep = 1;
    },
    removeFinishedStepByNum(state, { payload }: PayloadAction<number>) {
      state.finishedSteps = state.finishedSteps.filter((step) => step < payload);
    },
  },
});

export const {
  setActiveStep,
  addFinishedStep,
  resetProgressBar,
  removeFinishedStepByNum,
} = progressBarSlice.actions;
export default progressBarSlice.reducer;
