module.exports = function (api) {
  api.cache(true);

  const presets = ['@babel/env', '@babel/react'];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        helpers: false,
        regenerator: true,
      },
    ],
    'babel-plugin-styled-components',
  ];
  const env = {
    test: {
      plugins: ['babel-plugin-dynamic-import-node'],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
