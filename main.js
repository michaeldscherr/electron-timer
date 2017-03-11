const {
    app,
    Tray,
    Menu,
    BrowserWindow,
} = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'assets/img/icon.png');
let appIcon = null;
let win = null;

app.on('ready', () => {
    win = new BrowserWindow({
        show: false,
    });
    appIcon = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
        {
            label: 'Item1',
            type: 'radio',
            icon: iconPath,
        },
        {
            label: 'Item2',
            submenu: [
                {
                    label: 'submenu1',
                },
                {
                    label: 'submenu2',
                },
            ],
        },
        {
            label: 'Item3',
            type: 'radio',
            checked: true,
        },
        {
            label: 'Toggle DevTools',
            accelerator: 'Alt+Command+I',
            click() {
                win.show();
                win.toggleDevTools();
            },
        },
        {
            label: 'Quit',
            accelerator: 'Command+Q',
            selector: 'terminate:',
        },
    ]);
    appIcon.setToolTip('This is my application.');
    appIcon.setContextMenu(contextMenu);
});
