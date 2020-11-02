import { Node } from 'scss-parser';

export interface Rule {
  astLocation: number,
  node: Node
}

export interface NewVariable {
  dictionaryEntry: string;
  variable?: string;
}

export interface NewVariables {
  [library: string]: string[];
}

export interface DataNode {
  newVariables: NewVariables;
  node: Node;
}

export as namespace Content;