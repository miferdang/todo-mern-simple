/* eslint no-unused-vars: 0 */
import express from 'express';
import compression from 'compression';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import mongoose from 'mongoose';
import volleyball from 'volleyball';

import serverConfig from './config';
import webpackConfig from '../webpack.config.dev';
import indexPage from './indexPage';
import router from './controller';

const app = express();
app.use('/task', router);
app.use(compression());
app.use(bodyParser.json({ limit: '20mb' }));
app.use(express.static(path.join(__dirname, '../dist/client')));

// Use webpack dev middleware when in development env
if (process.env.NODE_ENV === 'development') {
  app.use(volleyball);
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    filename: webpackConfig.output.filename,
  }));
  app.use(webpackHotMiddleware(compiler));
}

// Connect Database
mongoose.Promise = global.Promise;
mongoose.connect(serverConfig.mongoURL, { useMongoClient: true })
  .then(() => console.log('Database has already connected !'))
  .catch((err) => console.err(err));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Oh! Internal server error !');
});

// Render file html when get router '/'
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html').status(200).end(indexPage());
});

// Connect Server
app.listen(serverConfig.port, (err) => {
  if (!err) {
    console.log(`Yeah! Server is listening to port ${serverConfig.port}!`);
  } else {
    console.log('Oh! There is a problem with Server!');
  }
});

export default app;
