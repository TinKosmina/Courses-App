export const getCourseDuration = (minutes: number = 0): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMins = mins < 10 ? `0${mins}` : mins;
  const hourLabel = hours === 1 ? "hour" : "hours";

  return `${formattedHours}:${formattedMins} ${hourLabel}`;
};
