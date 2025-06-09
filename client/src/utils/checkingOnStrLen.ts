export const checkingOnStrLen = (arrStr: string[], maxLen: number) => {
  const resStr = arrStr.join('');
  if (resStr.length > maxLen) {
    return `${resStr.slice(0, maxLen)}...`;
  }
  return resStr;
};
