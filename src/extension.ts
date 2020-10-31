import * as vscode from 'vscode';

import { startup } from './utils';
import convertFile from './convertFile';

export const activate = (context: vscode.ExtensionContext) => {
	// Log startup information.
	startup();

	// Add commands to context.
	context.subscriptions.push(convertFile);
};

export function deactivate() {}
