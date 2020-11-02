import { Node } from 'scss-parser';

import { isInputStreamPosition } from '../../typeGuards';
import { buildEndPosition } from '../../utils';
import findEntryVariable from './findEntryVariable';
import getDeleteCount from './getDeleteCount';

const update = (dictionaryEntry: string, nodeArray: Node[], typeIndex: number): string | undefined => {
  const { start } = nodeArray[typeIndex];
  if (typeIndex > -1 && isInputStreamPosition(start)) {
    const variableName = findEntryVariable(dictionaryEntry, nodeArray[typeIndex]);

    if (variableName) {
      const newIdentifer: Node = {
        type: 'identifier',
        value: variableName,
        start,
        end: buildEndPosition(start, variableName)
      };
      const config = {
        index: typeIndex,
        nodeArray,
      };
      nodeArray = nodeArray.splice(typeIndex, getDeleteCount(dictionaryEntry, config), newIdentifer);

      return variableName;
    }
  }
};

export default update;
