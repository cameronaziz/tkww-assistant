export interface Variables {
  [key: string]: string;
}

export interface Config {
  pkg: string;
  pkgSource?: string;
  keyLead?: string;
  keyTail?: string;
  valueLead?: string;
  valueTail?: string;
  isCaseInsensitive?: boolean;
}

export interface Entry {
  variables: Variables;
  config: Config;
}

export type Book = Entry[];

export as namespace Dictionary;
