import { Node } from 'scss-parser';

import { isInputStreamPosition } from '../typeGuards';
import { buildEndPosition, findEntryVariable } from '../utils';
import getDeleteCount from './getDeleteCount';

const updateVariable = (dictionaryEntry: string, nodeArray: Node[], typeIndex: number): string | undefined => {
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
      const info = {
        typeIndex,
        nodeArray,
      };
      nodeArray = nodeArray.splice(typeIndex, getDeleteCount(dictionaryEntry, info), newIdentifer);

      return variableName;
    }
  }
};

export default updateVariable;
