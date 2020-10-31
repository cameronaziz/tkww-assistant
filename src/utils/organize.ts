const organize = (parsedLines: Content.ParsedLine[]) => {
  const valueLines = parsedLines.reduce((acc, cur, i) => {
    if (cur.isValue) {
      acc.push(i);
    }
    return acc;
    },
    [] as number[]
  );
  const lastValue = valueLines[valueLines.length - 1];
  const values: Content.ParsedLine[] = [];
  for (let i = 0; i < lastValue; i += 1) {
    if (valueLines.includes(i)) {
      values.push(parsedLines[i]);
      parsedLines.splice(i, 1);
    }
  }
  let lastBlankLine = 0;
  for (; lastBlankLine < lastValue; lastBlankLine += 1) {
    if(JSON.stringify(parsedLines[lastBlankLine].text) !== '') {
      break;
    }
  }
  values.push({
    isValue: false,
    text: '\n'
  });

  return parsedLines.splice(0, lastBlankLine).unshift(...values);
};

export default organize;
