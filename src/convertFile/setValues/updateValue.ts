const updateValue = (parsedLines: Content.ParsedLine[], config: Dictionary.Config, libraryVariables: string[], index: number) => {
  const { pkg, pkgSource } = config;

  const pkgSrc = pkgSource || '';
  const valueLine = parsedLines[index].text;

  const startOfVariables = valueLine.indexOf('@value') + 6;
  const endOfVariables = valueLine.indexOf('from');

  const dirtyVariables = valueLine.substr(startOfVariables, endOfVariables - startOfVariables - 1);
  // Remove ' ', '(' and ')'
  const variablesStr = dirtyVariables.replace(/[\s\(\)]/g, '');
  const variablesArr = variablesStr.split(',');

  libraryVariables.forEach((libraryVariable) => {
    variablesArr.indexOf(libraryVariable) < 0 && variablesArr.push(libraryVariable);
  });

  const variables = variablesArr.join(', ');

  parsedLines[index] = {
    text: `@value (${variables}) from '@xo-union/${pkg}${pkgSrc}';`,
    isValue: true,
  };
};

export default updateValue;
