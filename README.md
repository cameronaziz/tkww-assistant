# The Knot Worldwide Assistant VSCode Extension

This is the code repository for the VSCode Extension that helps engineers convert CSS values into Union variables.

## Features
Each command requires `⌘` + `⇧ Shift` + `P`

---
#### `Convert to TKWW Union CSS Variables`
This command will convert the following:
* Any HEX color code into Union color variables.
* Any spacing, expressed in pixels, into Union spacing variables.
* Import the new variables into the CSS/SCSS file.
---
More to come! Let us know ideas on Slack at `#tkww-vscode-extension` or tkww-vs-extension@theknotww.com.

## Requirements

 Node.js must be installed locally to install this extension.

## Installation
1. Ensure that Node.js is installed locally.
2. Open terminal, or another terminal emulator, and execute `npm install -g vsce`
3. Clone this repository locally and navigate terminal window into the folder.
4. Currently there are no dependencies, but future releases may require you to execute `npm install`.
5. Execute `vsce package` to build the package locally.
6. Execute `code --install-extension tkww-assistant-${VERSION_NUMBER}.vsix`, where version number is the current version number of the extension. Currently, it is `0.0.1`.

## Updating
1. Open terminal, or another terminal emulator, and navigate to the locally cloned repository, downloaded during install. If you have deleted the repository, simply follow Installation steps.
2. Currently there are no dependencies, but future releases may require you to execute `npm install`.
3. Execute `code --install-extension tkww-assistant-${VERSION_NUMBER}.vsix`, where version number is the current version number of the extension. Currently, it is `0.0.1`.

## Known Issues

There are no known issues at this time. \
Please report any issues on Slack at `#tkww-vscode-extension` or tkww-vs-extension@theknotww.com.

## Roadmap
* Create a command to convert all files within VSCode Workspace.
* Create a command to remove unused Union variables that have been imported.

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial release of TKWW Assistant

## **Enjoy!**
