const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'
const target = devMode ? 'web' : 'browserslist'

module.exports = {
  mode,
  target,
  entry: {
      index: './src/index.js',
  },
  output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs'),
      clean: true,
      assetModuleFilename: 'src/assets/images/[name].[ext]' 
  },
  devServer: {
    port: 4200,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'ProjectsPage.html',
      template: './src/pages/ProjectsPage/ProjectsPage.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'AuthPage.html',
      template: './src/pages/AuthPage/AuthPage.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'TasksPage.html',
      template: './src/pages/TasksPage/TasksPage.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'EmptyPage.html',
      template: './src/pages/EmptyPage/EmptyPage.html'
    }),
    new HtmlWebpackPlugin({ 
      filename: 'UsersProfilePage.html',
      template: './src/pages/UsersProfilePage/UsersProfilePage.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                    },
                  ],
                ],
              },
            },
          },
          'sass-loader'
        ],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.(?:|jpg|jpeg|webp|png|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: './image/[name][ext]'
        },
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }   
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
} 