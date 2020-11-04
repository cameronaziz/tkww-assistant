import { Node, InputStreamPosition } from 'scss-parser';

import dictionaries from '../dictionaries';
import { accessors } from '../utils';
import { valueIsString } from './typeGuards';

export const getPackage = (entry: Dictionary.Entry) => {
  const { config: { pkg, pkgSource }} = entry;
  const pkgSrc = pkgSource || '';
  return `@xo-union/${pkg}${pkgSrc}`;
};

export const getEntryForLibrary = (library: Node | undefined) => {
  let foundEntry: Dictionary.Entry | undefined = undefined;
  if (library) {
    for (const entryName in dictionaries) {
      const entry = dictionaries[entryName];
      const libraryName = getPackage(entry);
      const { value } = library;
      if (libraryName === value) {
        foundEntry = dictionaries[entryName];
        break;
      }
    }
  }
  return foundEntry;
};


export const buildNextIdentifierPredicate = (nextIdentifier?: string) => {
  return (node: Node, index: number, value: Node[]) => {
    if (!nextIdentifier) {
      return true;
    }
    if (node.type === 'identifier') {
      const previous = value[index - 1];
      if (node.value === nextIdentifier && previous.type !== 'space') {
        return true;
      }
    }
    return false;
  };
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

export const findEntryVariable = (dictionaryEntry: keyof Dictionary.Book, node: Node): string | undefined => {
  const { variables, config } = dictionaries[dictionaryEntry];
  const { value } = node;

  if (valueIsString(value) && variables[accessors.getCase(value, config)]) {
    const { valueLead, valueTail } = config;
    const valueL = valueLead || '';
    const valueT = valueTail || '';

    return `${valueL}${variables[accessors.getCase(value, config)]}${valueT}`;
  }
};
