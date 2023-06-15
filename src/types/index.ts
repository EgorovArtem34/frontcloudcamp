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
