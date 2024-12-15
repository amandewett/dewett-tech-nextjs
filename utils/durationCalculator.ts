export const durationCalculator = (joiningDate: Date, toDate: Date = new Date(Date.now())): string => {
  const fromYears = joiningDate.getFullYear();
  const fromMonths = joiningDate.getMonth();

  const toYears = toDate.getFullYear();
  const toMonths = toDate.getMonth();

  //calculate difference
  let years = fromYears > toYears ? 0 : toYears - fromYears;
  let months = toMonths - fromMonths;

  if (months < 0) {
    years--;
    months += 12;
  }

  return years <= 0 ? `${months}m` : `${years}y ${months}m`;
};
