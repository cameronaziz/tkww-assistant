import { Node } from 'scss-parser';

import { findIndexFrom } from '../../../utils';
import { nextIdentifierPredicate } from '../../utils';

interface Config {
  nodeArray: Node[];
  index: number;
}

const getDeleteCount = (dictionaryEntry: string, config?: Config): number => {
  let deleteCount = 1;
  switch (dictionaryEntry) {
    case 'tkCssSpacing': {
      if (config) {
        const { nodeArray, index } = config;
        const nextPxIndex = findIndexFrom(nodeArray, nextIdentifierPredicate, index);
        deleteCount = nextPxIndex - index + 1;

      }
    }
  }
  return deleteCount;
};

export default getDeleteCount;
