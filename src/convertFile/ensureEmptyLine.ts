import * as nodes from './nodes';
import { valueIsNodeArr } from './typeGuards';

const ensureEmptyLine = (data: Content.DataNode) => {
  const { value } = data.node;
  console.log("ensureEmptyLine -> value", value)
  if (valueIsNodeArr(value)) {
    // Iterate through lines, find all `atrule` nodes.
    const atRuleIndexes: number[] = [];
    value.forEach((node, index) => {
      if (node.type === 'atrule') {
        atRuleIndexes.push(index);
      }
    });

    // Get index of last `atrule` and add two.
    const newLineIndex = atRuleIndexes[atRuleIndexes.length - 1] + 1;

    // Enure the last `atrule` is not at the end of the file.
    // Check if the next node is a space.
    if (value.length > newLineIndex && value[newLineIndex].type === 'space') {
      // Add a line gap in correct place.
      value[newLineIndex] = {
        type: 'space',
        value: '\n\n',
      };
    }
  }
};

export default ensureEmptyLine;
