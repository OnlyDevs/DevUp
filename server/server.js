const express = require('express');
const path = require('path');
const cors = require('cors');
const { userRouter, matchRouter, authRouter } = require('./routes');
const { createTables } = require('./models');
const { NODE_ENV } = require('./env');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// static
if (NODE_ENV === 'development') {
  app.use(express.static(path.resolve(__dirname, './client-dev')));
  app.use('/test', express.static(path.resolve(__dirname, './client-dev')));
}
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// routers
app.use('/users', userRouter);
app.use('/matches', matchRouter);
app.use('/auth', authRouter);

// 404
app.use((req, res) => {
  res.status(404).json({});
});

// error
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({});
});

// start
createTables()
  .then(() => {
    app.listen(3001, () => {
      console.log('server started');
    });
  })
  .catch((err) => console.log(err));
