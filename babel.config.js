module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@modules': './api/src/modules',
        '@config': './api/src/config',
        '@utils': './api/src/utils',
        '@services': './api/src/services',
        '@middlewares': './api/src/middlewares',
        '@providers': './api/src/providers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts',
  ]
}
