export const generatedArray = (start: number, end: number) => {
  const range = {
    start,
    end,

    *[Symbol.iterator]() {
      for (let value = start; value <= end; value++) {
        yield value;
      }
    }
  };
  return [...range];
};
