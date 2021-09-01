const express = require('express');
const mongoose = require('mongoose');
const appRoutes = require('./routes/rs_app_routes');
const temiRoutes = require('./routes/temi_routes');
const userRoutes = require('./routes/user_routes');
const HttpError = require('./models/http_error');
const app = express();
const path = require('path');

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Origin, X-Requested-With, Accept, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/temis', temiRoutes);

app.use('/api/apps', appRoutes);

app.use('/api/users', userRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Are you lost? How did you get here :O', 404);
  throw error;
});

// Error handling middleware
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (error) => {
      console.log('Error: ' + error);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({
    message:
      error.message ||
      "Something went wrong on the server D: Please don't fire me",
  });
});

app.use(express.static(path.join(__dirname, 'client', 'build')));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.lzzyn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  )
  .then(() => {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
    app.listen(process.env.PORT || 5000);
  })
  .catch((error) => {
    console.error(error);
  });
