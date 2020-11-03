import * as vscode from 'vscode';
import { posix } from 'path';
import convertFile from '../convertFile';

const convertWorkspace = vscode.commands.registerCommand('tkww.convertWorkspace', async () => {
  const { workspaceFolders } = vscode.workspace;

  if (!workspaceFolders) {
    vscode.window.showInformationMessage('No folder or workspace opened');
    return 1;
  }


  const folderUri = workspaceFolders[0].uri;
  const fileUri = folderUri.with({ path: posix.join(folderUri.path, '.gitignore') });

  const readData = await vscode.workspace.fs.readFile(fileUri);
  const data = Buffer.from(readData).toString('utf8');
  const ignorePaths = data.split('\n');
  const ignoreGlob = `{${ignorePaths.join(',')}}`;
  const files = await vscode.workspace.findFiles('**/*.*', ignoreGlob);

  files.forEach(async (file) => {
    // Read the file
    const bufferData = await vscode.workspace.fs.readFile(file);

    // Convert the Buffer into text.
    const text = Buffer.from(bufferData).toString('utf8');

    // Convert the text.
    const modifiedCSS = convertFile(text);
    // Convert the text into Buffer.
    const writeData = Buffer.from(modifiedCSS, 'utf8');

    // Write the file
    vscode.workspace.fs.writeFile(file, writeData);
  });
});

export default convertWorkspace;