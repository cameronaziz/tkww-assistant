import dictionaries from '../../dictionaries';
import { valueIsNodeArr } from '../typeGuards';
import { getPackage } from '../utils';
import { newLine } from '../nodes';
import addAtValue from './addAtValue';

const addAtRules = (data: Content.DataNode) => {
  const { newVariables, node: { value } } = data;
  if (valueIsNodeArr(value)) {
    // Iterate through libraries that had variables added.
    for (const remainingLibrary in newVariables) {
      // Get the Dictionary.Entry associated with the library.
      const dictionaryEntry = dictionaries[remainingLibrary];
      // Get the package name.
      const library = getPackage(dictionaryEntry);
      // Add a new line to the start of the node array.
      value.unshift(newLine);
      // Create the atrule and add to the start of the node array.
      const newAtRule = {
        type: 'atrule',
        value: addAtValue(library, newVariables[remainingLibrary])
      };
      value.unshift(newAtRule);
    }
  }
};

export default addAtRules;
