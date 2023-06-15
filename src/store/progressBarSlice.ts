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
  },
});

export const { setActiveStep } = progressBarSlice.actions;
export default progressBarSlice.reducer;
