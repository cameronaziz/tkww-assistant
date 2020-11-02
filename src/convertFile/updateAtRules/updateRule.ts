import { valueIsNodeArr } from '../typeGuards';
import * as utils from '../utils';
import addLibraryVariables from './addLibraryVariables';
import buildRuleVariables from './buildRuleVariables';

// TODO: Remove all the nested if statements.
const updateRule = (data: Content.DataNode) => {
  const { node: { value }, newVariables } = data;
  if (valueIsNodeArr(value)) {
    // Get the library that is imported.
    const library = value.find((node) => node.type === 'string_single' || node.type === 'string_double');
    // Get the dictionary entry that corresponds with the import.
    const dictionaryEntry = utils.getEntryForLibrary(library);
    // Check if dictionaryEntry is found and if newVariables has additions for this dictionary entry.
    if (dictionaryEntry && newVariables[dictionaryEntry.config.name]) {
      // Get the variable nodes. If not wrapped in parenthesis, wrap in parenthesis.
      const currentVariableNodes = buildRuleVariables(value);
      if (valueIsNodeArr(currentVariableNodes)) {
        // Add new variables to current variable nodes.
        const addLibraryVariablesParams = {
          currentVariableNodes,
          dictionaryEntry,
          libraryVariables: newVariables[dictionaryEntry.config.name],
        };
        addLibraryVariables(addLibraryVariablesParams);
        // Delete added variables from newVariables mapping.
        delete newVariables[dictionaryEntry.config.name];
      }
    }
  }
};

export default updateRule;