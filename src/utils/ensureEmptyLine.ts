const ensureEmptyLine = (parsedLines: Content.ParsedLine[]) => {
  const firstAfterValuesIndex = parsedLines.findIndex((parsedLine) => !parsedLine.isValue);
  const firstAfterValues = parsedLines[firstAfterValuesIndex];
  if (firstAfterValues.text !== '') {
    const emptyLine: Content.ParsedLine = {
      text: '',
      isValue: false,
    };
    parsedLines.splice(firstAfterValuesIndex, 0, emptyLine);
  }
};

export default ensureEmptyLine;
