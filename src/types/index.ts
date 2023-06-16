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
  };
};

export type InputNameType = 'nickname' | 'name' | 'surname' | 'sex';

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
