const {app, BrowserWindow } = require('electron');
const path = require("path");

function create_window(){
    const win = new BrowserWindow({
        width: 1000,
        height: 1000,
        frame: false,
        icon:path.join(__dirname, "img", "logo.ico"),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html')
}
app.whenReady().then(create_window)
app.on('window-all-closed',() => {
    if (process.platform !== 'darwin')app.quit()
})