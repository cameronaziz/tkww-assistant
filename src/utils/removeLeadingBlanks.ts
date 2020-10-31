const removeLeadingBlanks = (parsedLines: Content.ParsedLine[]) => {
  const firstNonBlank = parsedLines.findIndex((parsedLine) => parsedLine.text !== '');
  return parsedLines.splice(0, firstNonBlank);
};

export default removeLeadingBlanks;
