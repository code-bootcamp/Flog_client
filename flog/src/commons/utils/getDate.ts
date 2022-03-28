export const getDatetime = (str: string) => {
  const datetime = new Date(str);
  return datetime;
};

export const diffDays = (firstDate: Date, lastDate: Date) => {
  const diffTimeSeconds = lastDate.getTime() - firstDate.getTime();
  const diffDays = Math.abs(diffTimeSeconds / (1000 * 3600 * 24));
  return diffDays + 2;
};

export const getMonthString = (str: string, plusDay?: number) => {
  const datetime = new Date(str);
  if (plusDay) {
    const plusDateResult = datetime.getTime() + plusDay * 1000 * 3600 * 24;
    const temp = new Date(plusDateResult);
    return temp.getMonth() + 1;
  }
  return datetime.getMonth() + 1;
};

export const getDateString = (str: string, plusDay?: number) => {
  const datetime = new Date(str);
  if (plusDay) {
    const plusDateResult = datetime.getTime() + plusDay * 1000 * 3600 * 24;
    const temp = new Date(plusDateResult);
    return temp.getDate();
  }
  return datetime.getDate();
};

export const getWeekdayString = (str: string, plusDay?: number) => {
  const datetime = new Date(str);
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  if (plusDay) {
    const plusDateResult = datetime.getTime() + plusDay * 1000 * 3600 * 24;
    const temp = new Date(plusDateResult);
    return WEEKDAY[temp.getDay()];
  }
  return WEEKDAY[datetime.getDay()];
};
