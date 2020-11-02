import updateValue from './updateValue';
import recurse from '../recurse';

const updateValues = (data: Content.DataNode): Content.DataNode => {
  const { newVariables, node } = data;

  // If the node is an value, update.
  if (node.type === 'value') {
    // Update the value and receive the new variable, if updated.
    const newVariable = updateValue(node);
    // Check if value updated.
    if (newVariable && newVariable.variable) {
      // Add the updated variable to the DataNode
      newVariables[newVariable.dictionaryEntry] = newVariables[newVariable.dictionaryEntry] || [];
      newVariables[newVariable.dictionaryEntry].push(newVariable.variable);
    }
  }

  // Recurse through the data to update any value.
  recurse(data, 'updateValues');

  return data;
};

export default updateValues;