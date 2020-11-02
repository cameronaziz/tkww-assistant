import { Node } from 'scss-parser';

import * as nodes from '../nodes';
import addVariables from './addVariables';

const addAtValue = (library: string, variables: string[]) => {
  const newAtValue: Node[] = [];
  newAtValue.push(nodes.atKeyword);
  newAtValue.push(nodes.space);

  // Add variables inside parenthesis.
  newAtValue.push({
    type: 'parentheses',
    value: addVariables(variables)
  });

  newAtValue.push(nodes.space);
  newAtValue.push(nodes.fromNode);
  newAtValue.push(nodes.space);

  // Add library surrounded by single quotes.
  newAtValue.push({
    type: 'string_single',
    value: library,
  });

  newAtValue.push(nodes.semicolon);

  return newAtValue;
};

export default addAtValue;
