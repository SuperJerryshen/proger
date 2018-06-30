const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  const isProd = env === 'production';
  config = injectBabelPlugin(
    'babel-plugin-transform-export-extensions',
    config
  );
  if (isProd) {
    // 生产环境添加的配置
  }
  return config;
};
