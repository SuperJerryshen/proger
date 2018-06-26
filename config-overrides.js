const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
  const isProd = env === 'production';
  // config.node = {
  //   __dirname: false,
  //   __filename: false
  // };
  config = injectBabelPlugin(
    'babel-plugin-transform-export-extensions',
    config
  );
  if (isProd) {
    // 生产环境添加的配置
  }

  // config.module.rules.push({
  //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  //   use: {
  //     loader: 'url-loader',
  //     options: {
  //       limit: 100000,
  //       mimetype: 'image/svg+xml',
  //     },
  //   },
  // });
  return config;
};
