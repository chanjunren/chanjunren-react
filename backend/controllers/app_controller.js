const Application = require('../models/rs_app');
const HttpError = require('../models/http_error');

const getAllApplications = async (req, res, next) => {
  let applications;
  try {
    applications = await Application.find({}, '-units');
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'An error occured while trying to retrive the applications stored! D:',
        500,
      ),
    );
  }

  res.status(201).json({
    applications: applications.map((app) => app.toObject({ getters: true })),
  });
};

const addApplication = async (req, res, next) => {
  const { name } = req.body;

  let existingApp;
  try {
    existingApp = await Application.findOne({ name: name });
    if (existingApp) {
      return next(
        new HttpError(
          'An error occured while checking for existing applications! D:',
          500,
        ),
      );
    }
  } catch (err) {
    return next(
      new HttpError(
        'An error occured while checking for existing applications! D:',
        500,
      ),
    );
  }

  const newApp = new Application({
    name: name,
    units: [],
  });

  try {
    await newApp.save();
  } catch (err) {
    return next(
      new HttpError('An error occured while saving this application! D:', 500),
    );
  }

  res.status(201).json({ message: 'Application saved!' });
};

const deleteApplicationByAid = async (req, res, next) => {
  const appId = req.params.appId;
  let app;
  try {
    app = await Application.find({});
  } catch (err) {
    console.err(err);
    return next(
      new HttpError(
        'Something went wrong when looking for the place to be deleted! D:',
        500,
      ),
    );
  }

  // TO DO 
};

const updateApplicationByAid = (req, res, next) => {};

const getApplicationsByTid = (req, res, next) => {};

exports.getAllApplications = getAllApplications;
exports.addApplication = addApplication;
exports.deleteApplicationByAid = deleteApplicationByAid;
exports.getApplicationsByTid = getApplicationsByTid;
exports.updateApplicationByAid = updateApplicationByAid;
