# The Knot Worldwide Assistant - VSCode Extension

This is the code repository for the VSCode extension that helps engineers convert CSS values into Union variables.

![TKWW Assistant Convert](docs/TKWW%20Assistant%20-%20Convert.gif)

## Features
To execute a command, press `⌘ Command` + `⇧ Shift` + `P`. Once the VSCode Command Palette opens, type the command, as written in each section header.

---
#### `TKWW: Convert File to Union Variables`
This command will convert the following for the currently open file:
* Any HEX color code into Union color variables.
* Any spacing, expressed in pixels, into Union spacing variables.
* Import the new variables into the CSS/SCSS file.
---

> More features are being worked on! Take a look at the [roadmap](#Roadmap) below or suggest ideas on Slack at [`#vscode-extension`](https://theknotww.slack.com/archives/C01E4Q8T10R).

## Requirements
* VSCode version `1.50.0` or later is required to use this extension.
* [Node.js](https://nodejs.org/en/) must be installed locally to install this extension.

## Installation
1. Ensure that Node.js is installed locally.
2. Open terminal, or another terminal emulator, and execute `npm install -g vsce`.
3. Clone this repository locally and navigate terminal window into the folder.
4. Execute `npm install`.
5. Execute `vsce package` to build the package locally.
6. Execute `code --install-extension tkww-assistant-${VERSION_NUMBER}.vsix`.
   * `VERSION_NUMBER` is the current version number of this extension.
   * Currently, it is `0.1.0`, but please check against `package.json`.
   * The command is `code --install-extension tkww-assistant-0.1.0.vsix`.

## Updating
1. Open terminal, or another terminal emulator, and navigate to the locally cloned repository, downloaded during install. If you have deleted the repository, simply follow Installation steps.
2. Ensure that you are the `master` branch by executing `git branch --show-current`.
   * If `master` is not the current branch, execute `git checkout master`.
3. Execute `git pull`.
4. Execute `npm install`.
5. Execute `vsce package` to build the package locally.
6. Execute `code --install-extension tkww-assistant-${VERSION_NUMBER}.vsix`.
   * `VERSION_NUMBER` is the current version number of this extension.
   * Currently, it is `0.1.0`, but please check against `package.json`.
   * The command is `code --install-extension tkww-assistant-0.1.0.vsix`.

## Known Issues
There are no known issues at this time. \
Please report any issues on Slack at [`#vscode-extension`](https://theknotww.slack.com/archives/C01E4Q8T10R).

## Roadmap
* Add unit tests.
* Exit command if no changes are needed.
* Validate against installed Union package to ensure that import statements are correct.
* Validate against file types to only convert CSS or any other preprocessor styling language.
* Create a command to convert all files within VSCode Workspace.
* Create a command to remove unused Union variables that have been imported.
* Create a command to convert dashed variables to camel cased variables.

## Release Notes
For details of each release, review the [changelog](docs/CHANGELOG.md).

### 0.1.0
Migrate application to use abstract syntax tree.

### 0.0.1
Initial release of TKWW Assistant.
