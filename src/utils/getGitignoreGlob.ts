import * as vscode from 'vscode';
import { posix } from 'path';

// TODO: Get all .gitignore in workspaces and add relative path to workspaceFolder
const getGitignoreGlob = async (workspaceFolder: vscode.WorkspaceFolder, outputChannel?: vscode.OutputChannel): Promise<string> => {
  // Get the uri of the .gitignore file.
  const folderUri = workspaceFolder.uri;
  const fileUri = folderUri.with({ path: posix.join(folderUri.path, '.gitignore') });

  outputChannel?.appendLine(`Entries in ${fileUri.path.replace(folderUri.path, '')} will be ignored.`);

  // Read the file and convert Buffer into text.
  const readBuffer = await vscode.workspace.fs.readFile(fileUri);
  const data = Buffer.from(readBuffer).toString('utf8');

  // Split each line into array.
  const ignorePaths = data.split('\n');

  // Convert into Glob.
  const ignoreGlob = `{${ignorePaths.join(',')}}`;

  return ignoreGlob;
};

export default getGitignoreGlob;
