import * as scssAST from 'scss-parser';

import addAtRules from './addAtRules';
import ensureEmptyLine from './ensureEmptyLine';
import updateAtRules from './updateAtRules';
import updateValues from './updateValues';

// Create `convertFile` subscription.
const convertFile = (text: string) => {
  const node = scssAST.parse(text);
  const data: Content.DataNode = {
    newVariables: {},
    node,
  };

  updateValues(data);
  updateAtRules(data);
  addAtRules(data);
  ensureEmptyLine(data);

  const modifiedCSS = scssAST.stringify(data.node);

  return modifiedCSS;
};

export default convertFile;
