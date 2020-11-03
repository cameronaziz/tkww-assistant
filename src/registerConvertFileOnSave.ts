import * as vscode from 'vscode';

const registerConvertFileOnSave = () => {
  vscode.workspace.onWillSaveTextDocument(() => {
    const config = vscode.workspace.getConfiguration('TKWW');
    const onSave = config.get('convertFileOnSave');
    if (onSave) {
      vscode.commands.executeCommand('tkww.convertFile');
    }
  });
};

export default registerConvertFileOnSave;
