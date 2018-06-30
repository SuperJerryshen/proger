const createWindow = require('../../libs/createWindow')
const { appUrl } = require('../../libs/constant')

module.exports = (e, { path, config = null }) => {
  const hashPath = '/#/' + (path[0] === '/' ? path.slice(1) : path)
  const url = appUrl + hashPath
  createWindow({ url }, config)
}
