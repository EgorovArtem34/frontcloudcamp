import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Gender, UserStateType } from '../types';

const initialState: UserStateType = {
  step1: {
    nickname: '',
    name: '',
    surname: '',
    sex: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setNickName(state, { payload }: PayloadAction<string>) {
      state.step1.nickname = payload;
    },
    setName(state, { payload }: PayloadAction<string>) {
      state.step1.name = payload;
    },
    setSurname(state, { payload }: PayloadAction<string>) {
      state.step1.surname = payload;
    },
    setSex(state, { payload }: PayloadAction<Gender>) {
      state.step1.sex = payload;
    },
  },
});

export const {
  setNickName,
  setName,
  setSurname,
  setSex,
} = userSlice.actions;
export default userSlice.reducer;
