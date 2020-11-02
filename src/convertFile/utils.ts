import { Node, InputStreamPosition } from 'scss-parser';

import dictionaries from '../dictionaries';

export const getPackage = (entry: Dictionary.Entry) => {
  const { config: { pkg, pkgSource }} = entry;
  const pkgSrc = pkgSource || '';
  return `@xo-union/${pkg}${pkgSrc}`;
};

export const getEntryForLibrary = (library: string | Node[]) => {
  if (!library) {
    return;
  }
  let foundEntry: Dictionary.Entry | undefined = undefined;
  for (const entryName in dictionaries) {
    const entry = dictionaries[entryName];
    const { config: { pkg, pkgSource }} = entry;
    const pkgSrc = pkgSource || '';
    if (`@xo-union/${pkg}${pkgSrc}` === library) {
      foundEntry = dictionaries[entryName];
      break;
    }
  }
  return foundEntry;
};


export const nextIdentifierPredicate = (node: Node, index: number, value: Node[]) => {
  if (node.type === 'identifier') {
    const previous = value[index - 1];
    if (node.value === 'px' && previous.type !== 'space') {
      return true;
    }
  }
  return false;
};

export const buildEndPosition = (position: InputStreamPosition | undefined, variableName: string): InputStreamPosition | undefined=> {
  if (position) {
    return {
      cursor: position.cursor + variableName.length,
      line: position.column,
      column: position.column + variableName.length,
    };
  }
};
