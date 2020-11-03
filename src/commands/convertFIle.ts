import * as vscode from 'vscode';

import * as utils from '../utils';
import convertFile from '../convertFile';

const supportedLanguageIds = [
	'scss',
	'css',
	'sass',
];

// Create `convertFile` subscription.
const command = vscode.commands.registerCommand('tkww.convertFile', () => {
  // Get the current open file in the text editor.
  const { activeTextEditor } = vscode.window;
  // If no text editor is open, exit.
  if (!activeTextEditor || !supportedLanguageIds.includes(activeTextEditor.document.languageId)) {
    return;
  }

  // Get text of file and convert to array.
  let text = activeTextEditor.document.getText();

  // Convert text.
  const modifiedCSS = convertFile(text);

  // Write the text in the file.
  utils.updateText(modifiedCSS, activeTextEditor);
  // Move the cursor to the top left of the editor.
  utils.moveCursor(activeTextEditor);
});

export default command;
