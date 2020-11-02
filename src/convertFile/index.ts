import * as vscode from 'vscode';
import * as scssAST from 'scss-parser';

import * as utils from '../utils';
import addAtRules from './addAtRules';
import ensureEmptyLine from './ensureEmptyLine';
import updateAtRules from './updateAtRules';
import updateValues from './updateValues';

// Create `convertFile` subscription.
const convertFile = vscode.commands.registerCommand('tkww.convertFile', () => {
  // Get the current open file in the text editor.
  const { activeTextEditor } = vscode.window;
  // If no text editor is open, exit.
  if (!activeTextEditor) {
    return;
  }

  // Get text of file and convert to array.
  let text = activeTextEditor.document.getText();

  const node = scssAST.parse(text);
  const data: Content.DataNode = {
    newVariables: {},
    node,
  };

  updateValues(data);
  updateAtRules(data);
  addAtRules(data);
  ensureEmptyLine(data);

  const modifiedCSS = scssAST.stringify(data.node);

  // Update the text.
  utils.updateText(modifiedCSS, activeTextEditor);
  // Move the cursor to the top left of the editor.
  utils.moveCursor(activeTextEditor);
});

export default convertFile;
