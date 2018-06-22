const createWindow = require('./actions/createWindow');
const createWebWindow = require('./actions/createWebWindow');
const openSettingMenu = require('./actions/openSettingMenu');
// const store = require('electron-store');
const { ipcMain: ipc } = require('electron');

module.exports = () => {
  ipc.on('get-times', async (e, msg) => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
    e.sender.send('get-times-response', {
      msg,
      time: new Date(),
    });
  });

  ipc.on('create-window', createWindow);

  ipc.on('create-web-window', createWebWindow);

  ipc.on('open-setting-menu', openSettingMenu);
};
