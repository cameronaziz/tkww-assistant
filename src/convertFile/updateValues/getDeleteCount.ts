import { Node } from 'scss-parser';

import dictionaries from '../../dictionaries';
import { findIndexFrom } from '../../utils';
import { buildNextIdentifierPredicate } from '../utils';

interface Info {
  nodeArray: Node[];
  typeIndex: number;
}

const getDeleteCount = (entryName: string, info: Info): number => {
  const { nextIdentifier } = dictionaries[entryName].config;
  // If no nextIdentifier, only delete 1.
  if (!nextIdentifier) {
    return 1;
  }

  const { nodeArray, typeIndex } = info;
  // Build predicate to check against nextIdentifier.
  const nextIdentifierPredicate = buildNextIdentifierPredicate(nextIdentifier);
  // Get index of nextIdentifier.
  const nextIdentifierIndex = findIndexFrom(nodeArray, nextIdentifierPredicate, typeIndex);
  // Return distance between nextIdentifier and index.
  return nextIdentifierIndex - typeIndex + 1;
};

export default getDeleteCount;
