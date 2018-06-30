const isDev = require('electron-is-dev')
const path = require('path')

/**
 * 配置主页路径
 */
const devUrl = 'http://localhost:1314'
const localUrl = `file://${path.resolve(__dirname, '../')}/index.html`
const appUrl = isDev ? devUrl : localUrl

module.exports = {
  isDev,
  appUrl,
}
