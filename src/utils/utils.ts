import { CheckboxesType } from '../types';

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
export const removeNonNumericChars = (str: string) => Number(str.replace(/\D/g, ''));

export const myPhone = '+7 (999) 999-99-99';
export const myPhoneTypeNumber = removeNonNumericChars(myPhone);
export const myEmail = 'artegtor@gmail.com';

export const myLinks = [
  { name: 'Telegram', url: 'https://t.me/artegtor', id: 1 },
  { name: 'GitHub', url: 'https://github.com/EgorovArtem34', id: 2 },
  { name: 'Resume', url: 'https://ufa.hh.ru/resume/d4a2f271ff0c137e2a0039ed1f645442394448', id: 3 },
];

export const getTrueCheckBoxes = (checkBoxes: CheckboxesType): number[] => Object.keys(checkBoxes)
  .reduce<number[]>((acc, key) => {
  const numericKey = parseInt(key, 10);
  if (checkBoxes[numericKey]) {
    acc.push(numericKey);
  }
  return acc;
}, []);

export default calculateProgressBarWidth;
