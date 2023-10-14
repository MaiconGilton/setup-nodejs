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
        '@modules': './src/modules',
        '@config': './src/config',
        '@utils': './src/utils',
        '@services': './src/services',
        '@middlewares': './src/middlewares',
        '@providers': './src/providers'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts',
    '**/*.test.ts',
  ]
}
