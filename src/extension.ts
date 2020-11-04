import * as vscode from 'vscode';

import { startup } from './utils';
import * as commands from './commands';
import * as register from  './register';

export const activate = (context: vscode.ExtensionContext) => {
	const outputChannel = register.outputChannel();

	// Log startup information.
	startup(outputChannel);

	// Register commands on events.
	register.convertFileOnSave();

	// Add commands to context.
	context.subscriptions.push(commands.convertFile(outputChannel));
	context.subscriptions.push(commands.convertWorkspace(outputChannel));
	context.subscriptions.push(commands.toggleConvertFileOnSave(outputChannel));
};

export const deactivate = () => {
	// Methods executed when extension is deactivated.
};
