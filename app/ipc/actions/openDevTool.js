module.exports = (event, config = { mode: 'right' }) => {
  event.sender.openDevTool(config);
};
