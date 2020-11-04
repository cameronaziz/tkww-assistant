import * as vscode from 'vscode';

import convertFile from '../convertFile';
import { getGitignoreGlob, constants } from '../utils';

const createCommand = (outputChannel: vscode.OutputChannel) => {
  // Create `convertWorkspace` command.
  const command = vscode.commands.registerCommand('tkww.convertWorkspace', async () => {
    const { workspaceFolders, findFiles, fs } = vscode.workspace;
    const { showErrorMessage } = vscode.window;

    // If no workspace is open, display message.
    if (!workspaceFolders) {
      showErrorMessage('No folder or workspace opened.');
      outputChannel.appendLine('`tkww.convertWorkspace` failed to execute: No folder or workspace opened.');
      return;
    }

    const workspaceFolder = workspaceFolders[0];
    const workspacePath = workspaceFolder.uri.path;

    // Get .gitignore file to ignore all ignore all within it.
    // TODO: Analyze all workspace folders for .gitignore.
    const ignoreGlob = await getGitignoreGlob(workspaceFolder, outputChannel);

    // Get all files that are not in .gitignore and supported file extensions.
    // TODO: Check the file Language Mode.
    const files = await findFiles(`**/*.${constants.supportedLanguageExtGlob}`, ignoreGlob);

    files.forEach(async (file) => {
      // Read the file
      const bufferData = await fs.readFile(file);

      // Convert the Buffer into text.
      const text = Buffer.from(bufferData).toString('utf8');

      // Convert the text.
      const modifiedCSS = convertFile(text);

      // Check if it has changed.
      if (modifiedCSS !== text) {
        // Convert the text into Buffer.
        const writeData = Buffer.from(modifiedCSS, 'utf8');

        // Write the file
        fs.writeFile(file, writeData);

        // Log to output channel.
        const fileName = file.path.replace(workspacePath, '');
        const logMessage = `${fileName} was modified and saved.`;
        outputChannel.appendLine(logMessage);
      }
    });
  });

  return command;
};

export default createCommand;