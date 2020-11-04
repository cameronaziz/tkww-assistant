import * as vscode from 'vscode';

const convertFileOnSave = () => {
  // Get configuration for TKWW
  const config = vscode.workspace.getConfiguration('TKWW');

  // Get `convertFileOnSave` setting.
  const onSave = config.get('convertFileOnSave');

  // If convertFileOnSave = true, convertFile file.
  if (onSave) {
    vscode.commands.executeCommand('tkww.convertFile');
  }
};

const registerConvertFileOnSave = () =>
  vscode.workspace.onWillSaveTextDocument(convertFileOnSave);


export default registerConvertFileOnSave;
