import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RadioInputStateType } from '../types';

const initialState: RadioInputStateType = {
  selectedRadioValue: null,
};

const radioInputsSlice = createSlice({
  name: 'radioInputs',
  initialState,
  reducers: {
    setRadioValue: (state, action: PayloadAction<number>) => {
      state.selectedRadioValue = action.payload;
    },
  },
});

export const { setRadioValue } = radioInputsSlice.actions;
export default radioInputsSlice.reducer;
