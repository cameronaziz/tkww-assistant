import { valueIsNodeArr } from './typeGuards';
import updateValues from './updateValues';
import updateAtRules from './updateAtRules';

interface RecurseFn {
  (data: Content.DataNode): void
}

interface RecurseFns {
  updateValues: RecurseFn
  updateAtRules: RecurseFn
}

const recurse = (data: Content.DataNode, recurseMethod: keyof RecurseFns) => {
  const { newVariables, node } = data;
  const { value } = node;

  const recurseFn: RecurseFns = {
    updateValues,
    updateAtRules,
  };
  if (valueIsNodeArr(value)) {
    value.forEach((node) => {
      recurseFn[recurseMethod]({ node, newVariables });
    });
  }
};

export default recurse;
