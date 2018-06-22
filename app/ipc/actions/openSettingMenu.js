const { forEach } = require('lodash');
const { Menu, MenuItem, BrowserWindow } = require('electron');
const { appUrl } = require('../../libs/constant');

const configs = [
  {
    label: '设置',
  },
  { type: 'separator' },
  {
    label: '重新加载',
    click(item, win, event) {
      win.loadURL(appUrl);
    },
  },
];

const menu = new Menu();
forEach(configs, conf => {
  menu.append(new MenuItem(conf));
});

module.exports = event => {
  const win = BrowserWindow.fromWebContents(event.sender);
  menu.popup(win);
};
