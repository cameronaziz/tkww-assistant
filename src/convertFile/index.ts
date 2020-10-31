import * as vscode from 'vscode';

import dictionaries from '../dictionaries';
import * as utils from '../utils';
import applyDictionary from './applyDictionary';

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
  const lines = text.split('\n');

  // Convert lines into `ParsedLine` objects.
  const parsedLines: Content.ParsedLine[] = lines.map((line) => ({
    text: line,
    isValue: line.includes('@value'),
  }));

  // Iterate through the dictionaries and convert the file each time.
  dictionaries.forEach((dictionary) => {
    applyDictionary(parsedLines, dictionary);
  });

  // Ensure there is an empty line below values
  utils.ensureEmptyLine(parsedLines);

  // Convert the `ParsedLine` array back into a string.
  const updatedText = parsedLines.map((parsedLine) => parsedLine.text).join('\n');

  // Update the text.
  utils.updateText(updatedText, activeTextEditor);
  // Move the cursor to the top left of the editor.
  utils.moveCursor(activeTextEditor);
});

export default convertFile;
