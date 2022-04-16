"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
let diagnosticCollection;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "emtrix" is now active!');
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('emtrix.helloWorld', () => {
        // The code you place here will be executed every time your command is executed
        // Display a message box to the user
        vscode.window.showInformationMessage('Hello World from emtrix!');
    });
    context.subscriptions.push(disposable);
    diagnosticCollection = vscode.languages.createDiagnosticCollection('emtrix');
    context.subscriptions.push(diagnosticCollection);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
// function onChange() {
//     let uri = document.uri;
//     check(uri.fsPath, goConfig).then(errors => {
//       diagnosticCollection.clear();
//       let diagnosticMap: Map<string, vscode.Diagnostic[]> = new Map();
//       errors.forEach(error => {
//         let canonicalFile = vscode.Uri.file(error.file).toString();
//         let range = new vscode.Range(error.line-1, error.startColumn, error.line-1, error.endColumn);
//         let diagnostics = diagnosticMap.get(canonicalFile);
//         if (!diagnostics) { diagnostics = []; }
//         diagnostics.push(new vscode.Diagnostic(range, error.msg, error.severity));
//         diagnosticMap.set(canonicalFile, diagnostics);
//       });
//       diagnosticMap.forEach((diags, file) => {
//         diagnosticCollection.set(vscode.Uri.parse(file), diags);
//       });
//     });
//   }
//# sourceMappingURL=extension.js.map