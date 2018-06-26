export const electron = window.require('electron');
export const isDev = electron.remote.require('electron-is-dev');

export default {
  electron,
  isDev,
};
