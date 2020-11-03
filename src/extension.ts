import * as vscode from 'vscode';

import { startup } from './utils';
import * as commands from './commands';
import registerConvertFileOnSave from  './registerConvertFileOnSave';

export const activate = (context: vscode.ExtensionContext) => {
	// Log startup information.
	startup();

	registerConvertFileOnSave();

	// Add commands to context.
	context.subscriptions.push(commands.convertFile);
	context.subscriptions.push(commands.convertWorkspace);
	context.subscriptions.push(commands.toggleConvertFileOnSave);
};

export function deactivate() {}
