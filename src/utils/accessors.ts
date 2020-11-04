import * as vscode from 'vscode';

export const getCase = (value: string, config: Dictionary.Config) =>
  config.isCaseInsensitive ? value.toUpperCase() : value;

export const getWorkspacePath = (workspaceFolders: readonly vscode.WorkspaceFolder[]) => workspaceFolders[0].uri.path;

export const getFileName = (filePath: string, workspaceFolders?: readonly vscode.WorkspaceFolder[]) => {
  const path = workspaceFolders ? getWorkspacePath(workspaceFolders) : '';
  return filePath.replace(path, '');
};

export default {
  getCase,
  getWorkspacePath,
  getFileName,
};
