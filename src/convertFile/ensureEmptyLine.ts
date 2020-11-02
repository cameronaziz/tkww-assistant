import * as nodes from './nodes';
import { valueIsNodeArr } from './typeGuards';


// TODO: Ensure that each value is followed by a `space` node.
const ensureEmptyLine = (data: Content.DataNode) => {
  const { value } = data.node;
  if (valueIsNodeArr(value)) {
    // Iterate through lines, find all `atrule` nodes.
    const atRuleIndexes: number[] = [];
    value.forEach((node, index) => {
      if (node.type === 'atrule') {
        atRuleIndexes.push(index);
      }
    });

    // Get last `atrule` and and return the next index.
    const newLineIndex = atRuleIndexes[atRuleIndexes.length - 1] + 1;

    // Ensure the last `atrule` is not at the end of the file.
    // Check if the next node is a space.
    if (value.length > newLineIndex && value[newLineIndex].type === 'space') {
      // Add a line gap in correct place.
      value[newLineIndex] = nodes.lineBreak;
    }
  }
};

export default ensureEmptyLine;
