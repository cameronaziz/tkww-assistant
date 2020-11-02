import recurse from '../recurse';
import updateRule from './updateRule';

const updateAtRules = (data: Content.DataNode): Content.DataNode => {
  const { node: { type }} = data;
  // If the node is an atrule, update.
  if (type === 'atrule') {
    updateRule(data);
  }

  // Recurse through the data to update any atrule.
  recurse(data, 'updateAtRules');

  return data;
};

export default updateAtRules;
