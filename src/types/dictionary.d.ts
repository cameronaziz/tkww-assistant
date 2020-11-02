export interface Variables {
  [key: string]: string;
}

export interface Config {
  name: string;
  pkg: string;
  pkgSource?: string;
  nextIdentifier?: string;
  keyLead?: string;
  keyTail?: string;
  valueLead?: string;
  valueTail?: string;
  isCaseInsensitive?: boolean;
  astType: string;
}

export interface Entry {
  variables: Variables;
  config: Config;
}

export interface Book {
  [library: string]: Entry
}

export as namespace Dictionary;
