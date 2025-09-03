export function formatDate(date: Date, format = "YYYY.MM") {
  function appendZero(str: string) {
    return str.length === 1 ? `0${str}` : str;
  }

  const formatted = format.replace(/(YYYY|YY|MM|dd)/gi, function (target) {
    switch (target) {
      case "YYYY": {
        return date.getFullYear().toString();
      }
      case "YY": {
        return appendZero((date.getFullYear() % 1000).toString());
      }
      case "MM": {
        return appendZero((date.getMonth() + 1).toString());
      }
      case "dd": {
        return appendZero(date.getDate().toString());
      }
      default: {
        return target;
      }
    }
  });

  return formatted;
}

export function displayPeriod(
  start: Date,
  end?: Date,
  options?: {
    dateFormat?: string;
    separator?: string;
    onGoingText?: string;
  }
) {
  const dateFormat = options?.dateFormat ?? "YYYY.MM";
  const separator = options?.separator ?? " ~ ";
  const onGoingText = options?.onGoingText ?? "Now";

  const startDate = formatDate(start, dateFormat);
  const endDate = end ? formatDate(end, dateFormat) : onGoingText;

  return `${startDate}${separator}${endDate}`;
}

export function dateDiff(from: Date, to: Date) {
  const diffYear = to.getFullYear() - from.getFullYear();
  const diffMonth = to.getMonth() - from.getMonth();

  const parsedMonth = diffYear * 12 + diffMonth;
  const targetYear = Math.floor(parsedMonth / 12);
  const targetMonth = parsedMonth % 12;

  return (targetYear ? `${targetYear}년` : "") + (targetMonth ? ` ${targetMonth}개월` : '');
}
