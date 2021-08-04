const mongoose = require('mongoose');

const Application = require('../models/rs_app');
const TemiUnit = require('../models/temi_unit');
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
  const { name, units } = req.body;
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
    units: units,
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
    app = await Application.findById(appId);
  } catch (err) {
    console.err(err);
    return next(
      new HttpError(
        'Something went wrong when looking for the place to be deleted! D:',
        500,
      ),
    );
  }

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    for (var temiId of app.units) {
      temiUnit = await TemiUnit.findById(temiId);
      temiUnit.applications.pull(app);
      await temiUnit.save({session: session});
    }
    await app.remove({session: session});
    await session.commitTransaction();
    res.status(200).json({ 'This item has been deleted! :D': app });
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when trying to create this unit! D:',
        500,
      ),
    );
  }

  // TO DO 
};

const updateApplicationByAid = (req, res, next) => {};

exports.getAllApplications = getAllApplications;
exports.addApplication = addApplication;
exports.deleteApplicationByAid = deleteApplicationByAid;
exports.updateApplicationByAid = updateApplicationByAid;
