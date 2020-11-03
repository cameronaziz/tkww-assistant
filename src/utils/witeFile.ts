import * as vscode from 'vscode';

const writeFile = async () => {
  if (!vscode.workspace.workspaceFolders) {
    return vscode.window.showInformationMessage('No folder or workspace opened');
  }

  const writeStr = '1€ is 1.12$ is 0.9£';
  const writeData = Buffer.from(writeStr, 'utf8');

  const folderUri = vscode.workspace.workspaceFolders[0].uri;
  const fileUri = folderUri.with({ path: posix.join(folderUri.path, 'test.txt') });

  await vscode.workspace.fs.writeFile(fileUri, writeData);

  const readData = await vscode.workspace.fs.readFile(fileUri);
  const readStr = Buffer.from(readData).toString('utf8');

  vscode.window.showInformationMessage(readStr);
  vscode.window.showTextDocument(fileUri);
}