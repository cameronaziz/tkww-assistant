import addValue from './addValue';
import updateValue from './updateValue';

const setValues = (parsedLines: Content.ParsedLine[], config: Dictionary.Config, libraryVariables: string[]) => {
  const { pkg, pkgSource } = config;

  const pkgSrc = pkgSource || '';
  const library = `@xo-union/${pkg}${pkgSrc}`;

  // Search if library has been added to file.
  const currentIndex = parsedLines
    .filter((parsedLine) => parsedLine.isValue)
    .findIndex((parsedLine) => parsedLine.text.includes(library));

  currentIndex < 0 ?
    addValue(parsedLines, config, libraryVariables) :
    updateValue(parsedLines, config, libraryVariables, currentIndex);
};

export default setValues;
