export const milliSecondsToDate = millisec => {
  const timestampMs = parseInt(millisec, 10);

  if (!isNaN(timestampMs)) {
    const date = new Date(timestampMs);

    // Get the individual components
    const options = {weekday: 'long', month: 'long', day: '2-digit'};
    const formattedDate = date.toLocaleDateString('en-US', options);

    // Extract the components
    const [weekday, monthAndDay] = formattedDate.split(', ');
    const [day, month] = monthAndDay.split(' ');

    // Reformat to the desired output
    const customFormattedDate = weekday + ', ' + month + ' ' + day;

    // console.log('Example output', customFormattedDate); // Example output: "Tuesday, 12 May"
    return customFormattedDate;
  } else {
    console.error('Invalid timestamp');
    return 'Invalid timestamp';
  }
};

const dateOptions = {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
};

export const timeOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
};

export const timeAgo = milliseconds => {
  const now = Date.now();
  const diff = now - milliseconds;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return 'just now';
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (days === 1) {
    return 'yesterday';
  } else if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else {
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
};

// Example usage:
// const exampleMilliseconds = Date.now() - (3 * 60 * 60 * 1000); // 3 hours ago
// console.log(timeAgo(exampleMilliseconds)); // Output: "3 hours ago"
