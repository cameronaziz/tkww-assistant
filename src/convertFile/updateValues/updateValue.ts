import { Node } from 'scss-parser';

import dictionaries from '../../dictionaries';
import { findIndexFrom } from '../../utils';
import { valueIsNodeArr } from '../typeGuards';
import { buildNextIdentifierPredicate } from '../utils';
import updateVariable from './updateVariable';

const updateValue = (node: Node): Content.NewVariable | undefined => {
  const { value } = node;

  if (valueIsNodeArr(value)) {
    // Iterate through dictionary entries.
    for (const entryName in dictionaries) {
      const { config } = dictionaries[entryName];
      const { nextIdentifier, astType } = config;

      // Build nextIdentifierPredicate using nextIdentifier.
      const nextIdentifierPredicate = buildNextIdentifierPredicate(nextIdentifier);
      // Get the index of the astType.
      const typeIndex = value.findIndex((valueItem) => valueItem.type === astType);
      // check if astType found as well as nextIdentifier is found.
      if (typeIndex > -1 && findIndexFrom(value, nextIdentifierPredicate, typeIndex) > -1) {
       return {
         dictionaryEntry: entryName,
         variable: updateVariable(entryName, value, typeIndex),
        };
      }
    }
  }
};

export default updateValue;
