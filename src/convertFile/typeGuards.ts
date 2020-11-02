import { Node, InputStreamPosition } from 'scss-parser';

export const valueIsNodeArr = (value: Node[] | string): value is Node[] => typeof value !== 'string';
export const valueIsString = (value: Node[] | string): value is string => typeof value === 'string';

export const isInputStreamPosition = (position: InputStreamPosition | undefined): position is InputStreamPosition => {
  if (position) {
    return true;
  }
  return false;
};