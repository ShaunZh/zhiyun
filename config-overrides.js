// eslint-disable-next-line
const { override, fixBabelImports, addWebpackAlias } = require('customize-cra')
// eslint-disable-next-line
// eslint-disable-next-line
const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  // 重写webpack的alias（别名）
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@layouts': path.resolve(__dirname, 'src/layouts'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@containers': path.resolve(__dirname, 'src/containers'),
    '@api': path.resolve(__dirname, 'src/api'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@plugins': path.resolve(__dirname, 'src/plugins')
  })
)
