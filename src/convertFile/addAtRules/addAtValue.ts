import { Node } from 'scss-parser';

import * as nodes from '../nodes';
import addVariables from './addVariables';

const addAtValue = (library: string, variables: string[]) => {
  const newAtValue: Node[] = [];
  newAtValue.push(nodes.atValue);
  newAtValue.push(nodes.space);
  newAtValue.push({
    type: 'parentheses',
    value: addVariables(variables)
  });
  newAtValue.push(nodes.space);
  newAtValue.push(nodes.fromNode);
  newAtValue.push(nodes.space);
  newAtValue.push({
    type: 'string_single',
    value: library,
  });
  newAtValue.push(nodes.semicolon);

  return newAtValue;
};

export default addAtValue;
