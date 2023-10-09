export const timeAgo = (pastDate: Date) => {
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - new Date(pastDate).getTime();

  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

  if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} minute${minutesAgo === 1 ? "" : "s"} ago`;
  }
  if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} hour${hoursAgo === 1 ? "" : "s"} ago`;
  } else {
    const dayAgo = Math.floor(timeDifference / day);
    return `${dayAgo} day${dayAgo === 1 ? "" : "s"} ago`;
  }
};
