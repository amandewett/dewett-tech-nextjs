export const durationCalculator = (joiningDate: Date, toDate: Date = new Date(Date.now()), giveNumber: boolean = false): string | number => {
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

  return giveNumber ? years : years <= 0 ? `${months}m` : `${years}y ${months}m`;
};
