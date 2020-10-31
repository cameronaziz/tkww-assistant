const addValue = (parsedLines: Content.ParsedLine[], config: Dictionary.Config, libraryVariables: string[]) => {
  const { pkg, pkgSource } = config;

  const pkgSrc = pkgSource || '';
  const variables = libraryVariables.join(', ');

  parsedLines.unshift({
    text: `@value (${variables}) from '@xo-union/${pkg}${pkgSrc}';`,
    isValue: true,
  });
};

export default addValue;
