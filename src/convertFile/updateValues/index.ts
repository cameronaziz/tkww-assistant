import receiveValue from './receiveValue';
import recurse from '../recurse';

const updateValues = (data: Content.DataNode): Content.DataNode => {
  const { newVariables, node } = data;
  if (node.type === 'value') {
    const newVariable = receiveValue(node);
    if (newVariable && newVariable.variable) {
      newVariables[newVariable.dictionaryEntry] = newVariables[newVariable.dictionaryEntry] || [];
      newVariables[newVariable.dictionaryEntry].push(newVariable.variable);
    }
  }

  recurse(data, 'updateValues');

  return {
    newVariables,
    node,
  };
};

export default updateValues;