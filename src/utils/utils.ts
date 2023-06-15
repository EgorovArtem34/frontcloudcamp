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

export default calculateProgressBarWidth;
