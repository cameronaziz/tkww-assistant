import { Context } from "mocha";

export interface ParsedLine {
  text: string;
  isValue: boolean;
}

export as namespace Content;