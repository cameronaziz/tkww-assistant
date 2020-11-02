import { Node } from 'scss-parser';

import * as nodes from '../nodes';

const addVariables = (variables: string[]): Node[] => {
  const newVariables: Node[] = [];
  variables.forEach((variable) => {
    newVariables.push(nodes.space);
    newVariables.push({
      type: 'identifier',
      value: variable,
    });
    newVariables.push(nodes.comma);
  });
  newVariables.pop();
  newVariables.push(nodes.space);
  return newVariables;
};

export default addVariables;
