import * as vscode from 'vscode';

const createCommand = (outputChannel: vscode.OutputChannel) => {
  const command = vscode.commands.registerCommand('tkww.toggleConvertFileOnSave', () => {
    // Get configuration for TKWW
    const config = vscode.workspace.getConfiguration('TKWW');

    // Get `convertFileOnSave` setting.
    const originalValue = config.get('convertFileOnSave');

    // Update the setting.
    config.update('convertFileOnSave', !originalValue);

    // Log to output channel
    outputChannel.appendLine(`TKWW.convertFileOnSave was set to ${!originalValue}`);
    vscode.window.showInformationMessage(`Files will ${!originalValue ? '' : 'not'} be modified on save.`);
  });

  return command;
};


export default createCommand;
