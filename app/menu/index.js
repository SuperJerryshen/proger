const createMenu = ({
  config: { appName },
  method: {
    // 导入需要使用的函数
  },
}) => {
  return [
    {
      label: appName,
      submenu: [
        { role: 'about', label: '关于' },
        { type: 'separator' },
        { role: 'hide', label: '隐藏' },
        { role: 'hideothers', label: '隐藏其他' },
        { type: 'separator' },
        { role: 'quit', label: '退出' },
      ],
    },
    {
      label: '编辑',
      submenu: [
        { role: 'undo', label: '撤销' },
        { role: 'redo', label: '恢复' },
        { type: 'separator' },
        { role: 'cut', label: '剪切' },
        { role: 'copy', label: '复制' },
        { role: 'paste', label: '粘贴' },
        { role: 'pasteandmatchstyle', label: '粘贴(带格式)' },
        { role: 'delete', label: '删除' },
        { role: 'selectall', label: '选中所有 ' },
      ],
    },
    {
      label: '帮助',
      submenu: [
        {
          label: '打开开发者工具',
          click(item, win, event) {
            win.webContents.openDevTools({ mode: 'right' })
          },
        },
      ],
    },
  ]
}

module.exports = createMenu
