interface Predicate<T> {
  (value: T, index: number, obj: T[]): unknown
}

const findIndexFrom = <T extends object>(value: T[], predicate: Predicate<T>, startIndex: number): number => {
  let found = -1;
  let currentIndex = startIndex;
  while (currentIndex < value.length && found < 0) {
    if (predicate(value[currentIndex], currentIndex, value)) {
      found = currentIndex;
    }
    currentIndex += 1;
  }
  return found;
};

export default findIndexFrom;
