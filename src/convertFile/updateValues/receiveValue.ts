import { Node } from 'scss-parser';

import dictionaries from '../../dictionaries';
import { findIndexFrom } from '../../utils';
import { valueIsNodeArr } from '../typeGuards';
import { nextIdentifierPredicate } from '../utils';
import update from './update';

const receiveValue = (node: Node): Content.NewVariable | undefined => {
  let { value } = node;

  if (valueIsNodeArr(value)) {
    for (const dictionaryEntry in dictionaries) {
      const { config } = dictionaries[dictionaryEntry];
      const typeIndex = value.findIndex((valueItem) => valueItem.type === config.astType);
      if (typeIndex > -1 && findIndexFrom(value, nextIdentifierPredicate, typeIndex) > -1) {
       return {
         dictionaryEntry,
         variable: update(dictionaryEntry, value, typeIndex),
        };
      }
    }
  }
};

export default receiveValue;
