export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

export const getRandomEpochTime = () => {
  // const randomTime = new Date(Math.floor((Date.now() / 1000) * Math.random()));
  const randomTime = Math.floor((Date.now() / 1000) * Math.random());
  return randomTime;
};

export const convertToHours = (epoch: number): string => {
  const shortTime = new Intl.DateTimeFormat('en', {
    timeStyle: 'short',
  });

  return shortTime.format(epoch).toLowerCase();
};
