const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');
const isDev = require('electron-is-dev');
const ipc = require('electron-better-ipc');

const buildMenu = require('./menu');

/**
 * 配置载入路径
 * todo 配置打包的url
 */
const devUrl = 'http://localhost:3000';
const localUrl = `file://${path.join(__dirname, '../build/index.html')}`;
const appUrl = isDev ? devUrl : localUrl;

/**
 * 创建全局窗口对象
 */
let mainWindow;

/**
 * 新建窗口
 */
function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(appUrl);
  isDev && mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function() {
    // 关闭后，保留应用在dock栏
    mainWindow = null;
  });
}

/**
 * 配置菜单
 */
function createMenu() {
  const menuTemplate = buildMenu({
    config: {
      appName: app.getName(),
    },
    method: {},
  });

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

/**
 * 配置主线程响ipc应事件
 */
function setMainListeners() {
  // ipc.answerRenderer('open', open);
}

/**
 * 应用监听事件
 */
app.on('ready', () => {
  createWindow();
  setMainListeners();
  createMenu();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
});
