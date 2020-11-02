import { Node } from 'scss-parser';

const buildRuleVariables = (data: Node[]): string | Node[] => {
  // Find index of a parentheses node.
  const parenthesesIndex = data.findIndex((node) => node.type === 'parentheses');
  // Return parentheses value if exists.
  if (parenthesesIndex > -1) {
    return data[parenthesesIndex].value;
  }

  // Find atkeyword and from index, slice all nodes in between, these are the variables
  const atKeywordIndex = data.findIndex((node) => node.type === 'atkeyword');
  const fromIndex = data.findIndex((node) => node.value === 'from');
  const currentVariables = data.slice(atKeywordIndex + 1, fromIndex);

  // Build a parentheses node with the variables as the value.
  const parentheses: Node = {
    type: 'parentheses',
    value: currentVariables
  };
  // Delete the variables from the node array and insert the parentheses node.
  const deleteCount = fromIndex - atKeywordIndex - 3;
  data.splice(atKeywordIndex + 2, deleteCount, parentheses);
  // Return the node array of the parentheses value.
  return currentVariables;
};

export default buildRuleVariables;
