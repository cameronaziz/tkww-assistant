import * as vscode from 'vscode';
import convertFile from '../convertFile';

const convertWorkspace = vscode.commands.registerCommand('tkww.convertWorkspace', async () => {
  // TODO: Find .gitIgnore and exclude
  // const bufferData = await vscode.workspace.fs.readFile();


  const files = await vscode.workspace.findFiles('**/*.*');
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