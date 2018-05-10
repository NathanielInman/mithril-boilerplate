import webpack       from 'webpack';
import autoprefixer  from 'autoprefixer';
import poststylus    from 'poststylus';
import BrowserSync   from 'browser-sync-webpack-plugin';
import indexTemplate from 'html-webpack-template-pug';
import HtmlPlugin    from 'html-webpack-plugin';
import {index}       from './index.manifest';
import nodePath      from 'path';

let env = process.env.NODE_ENV,
    dist = './dist',
    path = nodePath.resolve(__dirname,dist);

export default {
  mode: env==='development'?'development':'production',
  entry:{
    app: ['./app.js'],
    vendor: ['mithril']
  },
  output:{
    path,
    publicPath: '/',
    sourceMapFilename: '[name].[hash].map',
    filename:'[name].[chunkhash].js'
  },
  devtool: 'source-map',
  plugins:[
    new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(env)}}),
    new webpack.LoaderOptionsPlugin({
      options: {stylus: {use: [poststylus(['autoprefixer'])]}}
    }),
    new HtmlPlugin({
      inject: false,
      template: indexTemplate,
      mobile: true,
      injectExtras: index,
      title: 'My First Mithril App'
    }),
    new BrowserSync({
      host: 'localhost',
      port: 4001,
      server: { baseDir: [dist] }
    })
  ],
  module:{
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader','eslint-loader','pug-as-jsx-loader'],
        exclude: /node_modules/
      },
      {test: /\.css$/, use: ['style-loader','css-loader']},
      {test: /\.styl$/, use: ['style-loader','css-loader','stylus-loader']},
      {test: /\.pug/, use: ['babel-loader','pug-as-jsx-loader']}
    ] //end rules
  } //end module
};

