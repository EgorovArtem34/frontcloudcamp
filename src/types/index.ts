export type ProgressBarStateType = {
  activeStep: number;
  finishedSteps: number[];
};

export type StepNumbersType = number[];

export enum Gender {
  Man = 'man',
  Woman = 'woman',
}

export type UserStateType = {
  step1: {
    nickname: string;
    name: string;
    surname: string;
    sex: Gender | '';
  },
  postData: {
    error: null | string,
    isLoading: boolean,
    postResponse: any,
  }
};

export type InputNameType = 'nickname' | 'name' | 'surname' | 'sex';
export type InputMainPageType = 'phoneNumber' | 'email';

export interface Advantage {
  id: number;
  value: string;
}

export type AdvantageStateType = {
  advantages: Advantage[];
};

interface CheckboxState {
  [key: number]: boolean;
}

export type CheckboxStateType = {
  checkBoxes: CheckboxState;
};

export type RadioInputStateType = {
  selectedRadioValue: number | null;
};

export type DataPostType = {
  advantages: Advantage[];
  selectedCheckBoxes: number[];
  selectedRadioValue: number | null;
  about: string;
  nickname: string;
  name: string;
  surname: string;
  sex: '' | Gender;
  email: string;
  phone: number;
};

export type CheckboxesType = Record<number, boolean>;
