const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  // const isDev = env === 'development';
  // config.node = {
  //   __dirname: false,
  //   __filename: false
  // };
  config = injectBabelPlugin(
    'babel-plugin-transform-export-extensions',
    config
  );
  return config;
};
