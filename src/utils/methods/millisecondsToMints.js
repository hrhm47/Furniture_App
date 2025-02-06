export const calulateTimeMilliSecondsToMinutes = notiTime => {
  const apiDate = new Date(notiTime);
  const currentDate = new Date(new Date());

  const timeDifference = Math.abs(currentDate - apiDate);

  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutesAgo = Math.floor(
    (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
  );
//   console.log("minutesAgo ",minutesAgo)
  if (daysAgo > 0) {
    return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
  } else if (hoursAgo > 1) {
    return `${hoursAgo} hour${hoursAgo > 1 ? 's' : ''} ago`;
  } else {
    return `${minutesAgo} minute${minutesAgo > 1 ? 's' : ''} ago`;
  }
};
