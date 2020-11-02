export interface Variables {
  [key: string]: string;
}

export interface Config {
  // The name of the entry on the Dictionary.Book.
  name: string;
  // The package name, not including `@xo-union`.
  pkg: string;
  // The location within the package of the CSS file.
  pkgSource?: string;
  // The node type that will be searched within the value.
  // TODO: Expand this to be more stable.
  astType: string;
  // The next identifier following the astType, e.g. `px`, to exclude `16vw` but include `16px`.
  nextIdentifier?: string;
  // Common text to be added to each value at the start.
  valueLead?: string;
  // Common text to be added to each value at the end.
  valueTail?: string;
  // If the key should be treated as case insensitive.
  // Case insensitive keys should be in all caps.
  isCaseInsensitive?: boolean;
}

export interface Entry {
  variables: Variables;
  config: Config;
}

export interface Book {
  [library: string]: Entry
}

export as namespace Dictionary;
