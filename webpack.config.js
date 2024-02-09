const fs = require('fs');
const path = require('path');

const { CheckerPlugin } = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = function (env = {}) {
  const buildPath = path.join(__dirname, 'docs');

  let plugins = [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      title: 'Core UI Playground',
      template: path.join(__dirname, 'src/playground/index.ejs'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => module.context && module.context.includes('node_modules'),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
  ];

  let rules = [
    {
      test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[hash].[ext]'
      }
    },
    {
      test: /\.tsx?$/,
      loader: 'awesome-typescript-loader',
      exclude: /node_modules/,
    },
  ];

  const sassLoaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
        minimized: env.optimized,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [
          require('autoprefixer')(),
        ].concat(env.optimized ? [
          require('css-mqpacker')({ sort: true }),
        ] : []),
      }
    },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['src/sass'],
        sourceMap: true,
      }
    },
  ];

  if (env.optimized) {
    plugins = plugins.concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        include: /.*\.js/,
        sourceMap: true,
        compress: {
          warnings: false,
        },
        comments: false,
      }),
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true,
      }),
    ]);

    rules = rules.concat([
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: sassLoaders,
        })
      }
    ]);
  } else {
    rules = rules.concat([
      {
        test: /\.sass$/,
        use: [{ loader: 'style-loader' }].concat(sassLoaders),
      }
    ]);
  }

  if (env.devserver && !env.optimized) {
    plugins = plugins.concat([
      new webpack.HotModuleReplacementPlugin(),
    ]);
  }

  if (env.build) {
    plugins = plugins.concat([
      new CleanWebpackPlugin([buildPath]),
    ]);
  }

  const stats = {
    assets: true,
    children: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    hash: false,
    timings: false,
    version: false,
    modules: false,
  }

  return {
    entry: {
      'playground': path.join(__dirname, 'src/playground/main.tsx'),
    },
    output: {
      filename: '[name].js',
      chunkFilename: '[name].js',
      path: buildPath,
    },
    devtool: 'source-map',
    devServer: {
      compress: true,
      historyApiFallback: true,
      hot: !env.optimized,
      inline: !env.optimized,
      overlay: true,
      port: 8090,
      stats: env.optimized ? stats : 'errors-only',
    },
    stats,
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins,
    module: {
      rules,
    }
  }
};

