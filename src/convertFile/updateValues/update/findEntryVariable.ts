import { Node } from 'scss-parser';

import { valueIsString } from '../../typeGuards';
import dictionaries from '../../../dictionaries';

const findEntryVariable = (dictionaryEntry: keyof Dictionary.Book, node: Node): string | undefined => {
  const { variables, config: { keyLead, keyTail, valueLead, valueTail }} = dictionaries[dictionaryEntry];
  const { value } = node;

  const valueL = valueLead || '';
  const valueT = valueTail || '';
  const keyL = keyLead || '';
  const keyT = keyTail || '';

  if (valueIsString(value) && variables[`${keyT}${value}${keyL}`.toUpperCase()]) {
    return `${valueL}${variables[value.toUpperCase()]}${valueT}`;
  }
};

export default findEntryVariable;
