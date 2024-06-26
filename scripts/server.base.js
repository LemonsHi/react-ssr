const path = require('path')

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, '../src/server.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist'), // 打包后的代码放在dist目录下
    filename: 'server.js', // 打包的文件名
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    // 配置 extensions 来告诉 webpack 在没有书写后缀时，以什么样的顺序去寻找文件
    extensions: ['.tsx', '.ts', '.js'], // 如果项目中只有 tsx 或 ts 可以将其写在最前面
    alias: {
      '@': path.resolve(__dirname, '../src'),
      common: path.resolve(__dirname, '../src/common'),
    },
  },
  module: {
    rules: [
      {
        test: /.(jsx?)|(tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets:
                    'iOS 9, Android 4.4, last 2 versions, > 0.2%, not dead', // 根据项目去配置
                  useBuiltIns: 'usage', // 会根据配置的目标环境找出需要的polyfill进行部分引入
                  corejs: 3, // 使用 core-js@3 版本
                },
              ],
              ['@babel/preset-typescript'],
              ['@babel/preset-react'],
            ],
          },
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: 'assets/fonts/[name].[hash:8][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: 'assets/imgs/[name].[hash:8][ext]',
        },
      },
    ],
  },
}
