const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const env = process.env.NODE_ENV || 'production';

module.exports = {
    mode: env,
    resolve: {
    fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "crypto-browserify": require.resolve('crypto-browserify'),
      },
    },
    entry: {
      Home: './src/app/page.js',
      About: './src/app/about/[slug]/page.js',
      Spotlight: './src/app/Spotlight/page.js',
    },
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
              },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                  }
                }
              },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: [
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 65
                      },
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                      },
                      webp: {
                        quality: 75
                      }
                    }
                  }
                ],
                generator: {
                  filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name][ext]'
                }
              }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
      ],
      optimization: {
        minimize: true,
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ],
      },
  };

  