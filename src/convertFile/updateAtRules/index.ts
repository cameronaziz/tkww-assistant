import recurse from '../recurse';
import updateRule from './updateRule';

const updateAtRules = (data: Content.DataNode): Content.DataNode => {
  const { node: { type }} = data;
  if (type === 'atrule') {
    updateRule(data);
  }

  recurse(data, 'updateAtRules');
  return data;
};

export default updateAtRules;
