import { Node } from 'scss-parser';

import * as nodes from '../nodes';

const addVariables = (variables: string[]): Node[] => {
  const newVariables: Node[] = [];

  // Iterate through variables adding space, variable name then comma.
  variables.forEach((variable) => {
    newVariables.push(nodes.space);
    newVariables.push({
      type: 'identifier',
      value: variable,
    });
    newVariables.push(nodes.comma);
  });

  // Remove trailing comma.
  newVariables.pop();
  // Add trailing space.
  newVariables.push(nodes.space);

  return newVariables;
};

export default addVariables;
