import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CheckboxStateType } from '../types';

const initialState: CheckboxStateType = {
  checkBoxes: {
    1: false,
    2: false,
    3: false,
  },
};

const checkBoxesSlice = createSlice({
  name: 'checkBoxes',
  initialState,
  reducers: {
    setStatusCheckBox: (state, action: PayloadAction<{ num: number; checked: boolean }>) => {
      const { num, checked } = action.payload;
      state.checkBoxes = { ...state.checkBoxes, [num]: checked };
    },
  },
});

export const { setStatusCheckBox } = checkBoxesSlice.actions;
export default checkBoxesSlice.reducer;
