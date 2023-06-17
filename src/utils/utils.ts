import { CheckboxStateType } from '../types';

const calculateProgressBarWidth = (finishedStepsCount: number) => {
  switch (finishedStepsCount) {
    case 1:
      return 0;
    case 2:
      return 50;
    case 3:
      return 100;
    default:
      return `Invalid finishedStepsCount: ${finishedStepsCount}`;
  }
};

export const myPhone = '+7 999 999-99-99';
export const myEmail = 'artegtor@gmail.com';

export const myLinks = [
  { name: 'Telegram', url: 'https://t.me/artegtor' },
  { name: 'GitHub', url: 'https://github.com/EgorovArtem34' },
  { name: 'Resume', url: 'https://career.habr.com/artegtor' },
];

export const getTrueKeysCheckBoxes = (checkBoxes: Record<number, boolean>): number[] => Object.keys(checkBoxes).reduce<number[]>((acc, key) => {
  const numericKey = parseInt(key);
  if (checkBoxes[numericKey]) {
    acc.push(numericKey);
  }
  return acc;
}, []);

export default calculateProgressBarWidth;
