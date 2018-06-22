const electron = require('electron');
const { BrowserWindow } = electron;

module.exports = ({ url, node = true, isGlobal = false }, config = null) => {
  // 窗口配置
  const windowConfig = Object.assign(
    {
      width: 1000,
      height: 800,
      minWidth: 800,
      minHeight: 600,
      titleBarStyle: 'default',
      backgroundColor: '#ffffff',
    },
    config
  );
  if (!windowConfig.webPreferences) {
    windowConfig.webPreferences = {};
  }
  // 配置window是否可用node相关模块
  windowConfig.webPreferences.nodeIntegration = node;

  if (isGlobal) {
    global.mainWindow = new BrowserWindow(windowConfig);
    mainWindow.loadURL(url);
    mainWindow.on('closed', function() {
      // 关闭后，保留应用在dock栏
      mainWindow = null;
    });
  } else {
    let win = new BrowserWindow(windowConfig);
    win.loadURL(url);
    win.on('closed', function() {
      // 关闭后，保留应用在dock栏
      win = null;
    });
  }
};
