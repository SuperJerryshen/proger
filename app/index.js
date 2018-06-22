const { app, BrowserWindow, Menu } = require('electron');
const { isDev, appUrl } = require('./libs/constant');
const buildMenu = require('./menu');
const createWindow = require('./libs/createWindow');
/**
 * 配置ipc
 */
require('./ipc')();

/**
 * 调试相关
 */
require('electron-debug')({ enabled: true, showDevTools: false });

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
 * 安装开发工具
 */
function createDevTools() {
  const {
    default: installExtension,
    REACT_DEVELOPER_TOOLS,
    REDUX_DEVTOOLS,
  } = require('electron-devtools-installer');
  const devtronExtension = require('devtron');
  devtronExtension.install();
  installExtension(REACT_DEVELOPER_TOOLS);
  installExtension(REDUX_DEVTOOLS);
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
  createWindow(
    { url: appUrl, isGlobal: true },
    { titleBarStyle: 'hiddenInset', frame: false }
  );
  setMainListeners();
  createMenu();
  createDevTools();
});

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow({ url: appUrl, isGlobal: true });
  }
});
