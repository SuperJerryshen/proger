const electron = window.require('electron');
const { ipcRenderer, webFrame } = electron;

// 禁用页面缩放功能
webFrame.setVisualZoomLevelLimits(1, 1);

export default ipcRenderer;
