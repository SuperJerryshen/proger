const { dialog } = require('electron');

module.exports = event => {
  dialog.showOpenDialog(
    {
      properties: ['openDirectory'],
    },
    (filePaths, bookmarks) => {
      event.sender.send('select-dir-response', {
        filePaths,
      });
    }
  );
};
