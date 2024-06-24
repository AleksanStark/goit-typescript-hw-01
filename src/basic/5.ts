enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: number): boolean => {
  if (day === 5 || day === 6) {
    return true;
  } else {
    return false;
  }
};

console.log(isWeekend(DayOfWeek.Saturday));
