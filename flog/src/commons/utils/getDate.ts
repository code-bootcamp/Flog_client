// String을 Datetime으로 변경
export const changeStringToDatetime = (str: string) => {
  const datetime = new Date(str);
  return datetime;
};

// Datetime을 '2022.02.02' 양식의 string으로 변경
export const changeDatetimeToString = (datetime: any) => {
  const year = datetime.getFullYear().toString();
  const month = datetime.getMonth().toString().padStart(2, "0");
  const date = datetime.getDate().toString().padStart(2, "0");
  return year + "." + month + "." + date;
};

// 시작일과 종료일을 입력하면 총 여행 일자 반환
export const diffDays = (firstDate: Date, lastDate: Date) => {
  const diffTimeSeconds = lastDate.getTime() - firstDate.getTime();
  const diffDays = Math.abs(diffTimeSeconds / (1000 * 3600 * 24));
  return diffDays + 1;
};

//
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
