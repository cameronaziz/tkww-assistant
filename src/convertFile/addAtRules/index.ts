import dictionaries from '../../dictionaries';
import { valueIsNodeArr } from '../typeGuards';
import { newLine } from '../nodes';
import addAtValue from './addAtValue';

const addAtRules = (data: Content.DataNode) => {
  const { value } = data.node;
  if (valueIsNodeArr(value)) {
    for (const remainingLibrary in data.newVariables) {
      const dictionaryEntry = dictionaries[remainingLibrary];
      const { config: { pkg, pkgSource }} = dictionaryEntry;
      const packageSource = pkgSource || '';
      const library = `@xo-union/${pkg}${packageSource}`;
      value.unshift(newLine);
      const newAtRule = {
        type: 'atrule',
        value: addAtValue(library, data.newVariables[remainingLibrary])
      };
      value.unshift(newAtRule);
    }
  }
};

export default addAtRules;
