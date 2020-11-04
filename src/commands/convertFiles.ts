import * as vscode from 'vscode';

import { updateText, moveCursor, constants, accessors } from '../utils';
import convertFile from '../convertFile';

const createCommand = (outputChannel: vscode.OutputChannel) => {
  // Create `convertFile` command.
  const command = vscode.commands.registerCommand('tkww.convertFile', () => {
    const { activeTextEditor, showInformationMessage, showErrorMessage } = vscode.window;
    const { workspaceFolders } = vscode.workspace;

    // If no text editor is open, exit.
    if (!activeTextEditor) {
      showErrorMessage('No file is open and selected.');
      outputChannel.appendLine('`tkww.convertFile` failed to execute: No file is open and selected.');
      return;
    }

    const { languageId, getText, fileName } = activeTextEditor.document;

    // If the file extension is wrong, exit.
    if (!constants.supportedLanguageExt.includes(languageId)) {
      showErrorMessage('This file type is not supported.');
      outputChannel.appendLine('`tkww.convertFile` failed to execute: This file type is not supported.');
      return;
    }

    // Get text of file and convert to array.
    let text = getText();

    // Convert text.
    const modifiedCSS = convertFile(text);

    if (modifiedCSS !== text) {
      // Write the text in the file.
      updateText(modifiedCSS, activeTextEditor);

      // Move the cursor to the top left of the editor.
      moveCursor(activeTextEditor);

      // Log to output channel.
      showInformationMessage('This file was modified.');
      const fileLocalName = accessors.getFileName(fileName, workspaceFolders);
      outputChannel.appendLine(`${fileLocalName} was modified.`);
    }
  });

  return command;
};

export default createCommand;
