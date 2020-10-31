import { removeLeadingBlanks } from '../utils';
import updatePropertyValues from './updatePropertyValues';
import setValues from './setValues';

const convertFile = (parsedLines: Content.ParsedLine[], dictionaryEntry: Dictionary.Entry) => {
  // Search file for keys, update the values and return any variables added to file.
  const libraryVariables = updatePropertyValues(parsedLines, dictionaryEntry);
  // Remove any leading blank lines.
  removeLeadingBlanks(parsedLines);

	if (libraryVariables.length > 0) {
    // Set @value references for any variables added.
    setValues(parsedLines, dictionaryEntry.config, libraryVariables);
	}
};

export default convertFile;
