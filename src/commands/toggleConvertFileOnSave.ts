import * as vscode from 'vscode';
import registerConvertFileOnSave from '../registerConvertFileOnSave';

const toggleConvertFileOnSave = vscode.commands.registerCommand('tkww.toggleConvertFileOnSave', () => {
  const config = vscode.workspace.getConfiguration('TKWW');
  const originalValue = config.get('convertFileOnSave');
  config.update('convertFileOnSave', !originalValue);
  registerConvertFileOnSave();
});

export default toggleConvertFileOnSave;
