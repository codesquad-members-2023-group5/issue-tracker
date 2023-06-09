const getTimeDifference = (pastTime) => {
  const currentTime = new Date();
  const timeDiff = currentTime - new Date(pastTime);

  const millisecondsPerSecond = 1000;
  const millisecondsPerMinute = 60 * millisecondsPerSecond;
  const millisecondsPerHour = 60 * millisecondsPerMinute;
  const millisecondsPerDay = 24 * millisecondsPerHour;
  const millisecondsPerWeek = 7 * millisecondsPerDay;

  if (timeDiff >= millisecondsPerWeek && timeDiff < 2 * millisecondsPerWeek) {
    return '1주 전';
  }
  if (timeDiff >= 2 * millisecondsPerWeek) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };

    return new Date(pastTime).toLocaleDateString('ko-KR', options);
  }
  if (timeDiff >= millisecondsPerDay) {
    const daysDiff = Math.floor(timeDiff / millisecondsPerDay);

    return `${daysDiff}일 전`;
  }
  if (timeDiff >= millisecondsPerHour) {
    const hoursDiff = Math.floor(timeDiff / millisecondsPerHour);

    return `${hoursDiff}시간 전`;
  }
  if (timeDiff >= millisecondsPerMinute) {
    const minutesDiff = Math.floor(timeDiff / millisecondsPerMinute);

    return `${minutesDiff}분 전`;
  }

  const secondsDiff = Math.floor(timeDiff / millisecondsPerSecond);

  return `${secondsDiff ?? 0}초 전`;
};

export { getTimeDifference };
