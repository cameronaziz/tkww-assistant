import { Node } from 'scss-parser';

import * as nodes from '../nodes';

interface AddLibraryVariablesParameters {
  currentVariableNodes: Node[];
  dictionaryEntry: Dictionary.Entry;
  libraryVariables: string[];
}

const addLibraryVariables = (params: AddLibraryVariablesParameters) => {
  const { currentVariableNodes, libraryVariables } = params;

  // If last node is a space, remove it, we will add back at the end.
  if (currentVariableNodes[currentVariableNodes.length - 1].type === 'space') {
    currentVariableNodes.pop();
  }

  // Add a space to the front if doesn't exist.
  if (currentVariableNodes[0].type !== 'space') {
    currentVariableNodes.unshift(nodes.space);
  }

  // Iterate through the new library variables and add nodes.
  libraryVariables.forEach((libraryVariable) => {
    // Check if the variable already is imported.
    const exists = currentVariableNodes.find((currentVariableNode) => currentVariableNode.value === libraryVariable);
    if (!exists) {
      // Add the new comma, space and variable.
      currentVariableNodes.push(nodes.comma);
      currentVariableNodes.push(nodes.space);
      currentVariableNodes.push({
        type: 'identifier',
        value: libraryVariable,
      });
    }
  });

  // Add the space to the end.
  if (currentVariableNodes[currentVariableNodes.length - 1].type !== 'space') {
    currentVariableNodes.push(nodes.space);
  }
};

export default addLibraryVariables;
