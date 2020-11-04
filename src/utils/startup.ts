import * as vscode from 'vscode';

const startup = (outputChannel: vscode.OutputChannel) => {
	outputChannel.appendLine('The Knot Worldwide Assistant Extension is now active.');
	outputChannel.appendLine('  This extension is not for public distribution.');
	outputChannel.appendLine('  Many thanks for the team that helped put this together.');
	outputChannel.appendLine('  Report all bugs on Slack at `#tkww-vscode-extension`.');
	outputChannel.appendLine('');
};

export default startup;
