// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let workspaceConfiguration = vscode.workspace.getConfiguration();
const THEME = "workbench.colorTheme";
let themeList: String[] = [];
let curIndex: number = 0;
let minutes: number = 0;
let curTimer: any = null;


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	loadSettings();
	console.log('Congratulations, "theme-tomato" is now active!');
	console.log('minutes', minutes);
	console.log('themes', JSON.stringify(themeList));

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let start = vscode.commands.registerCommand('theme-tomato.start', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('theme-tomato started!');
		console.log("started", curIndex, "@", now());
		curTimer = setInterval(() => {
			setTheme(themeList[curIndex]);
			curIndex = (curIndex + 1) % themeList.length;
		}, 1000 * 60 * minutes);
	});
	context.subscriptions.push(start);

	let stop = vscode.commands.registerCommand('theme-tomato.stop', () => {
		vscode.window.showInformationMessage('theme-tomato stopped!');
		cleanUp();
		console.log("stopped", curIndex, "@", now());

	});
	context.subscriptions.push(stop);

}

function loadSettings() {
	const config = vscode.workspace.getConfiguration("theme.tomato");
	minutes = config.minutes || 10;
	themeList = config.themes || ['Visual Studio Dark', 'Visual Studio Light'];

}

function setTheme(themeName: String) {
	console.log("Setting theme", themeName, "@", now());
	workspaceConfiguration.update(THEME, themeName, true);
	//reload
	workspaceConfiguration = vscode.workspace.getConfiguration();
}

function cleanUp() {
	if (curTimer === null) {
		return;
	}
	clearInterval(curTimer);
	curTimer = null;
}

function now(): String {
	return (new Date()).toISOString();
}
// this method is called when your extension is deactivated
export function deactivate() {
	cleanUp();
}
