const HttpError = require('../models/http_error');
const TemiUnit = require('../models/temi_unit');
const Application = require('../models/rs_app');

const getAllTemiUnits = (req, res, next) => {};

const addNewTemiUnit = async (req, res, next) => {
  const { owner, serialNumber, applications } = req.body;
  let existingUnit;
  try {
    existingUnit = await TemiUnit.findOne({ serialNumber: serialNumber });
  } catch (err) {
    console.error(err);
    return next(
      new HttpError('Something went wrong while querying the database!', 500),
    );
  }

  if (existingUnit) {
    console.dir(existingUnit);
    return next(
      new HttpError('A Temi Unit with this serial number already exists!', 409),
    );
  }

  const newUnit = new TemiUnit({
    owner: owner,
    serialNumber: serialNumber,
    applications: applications,
  });

  try {
    await newUnit.save();
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when trying to create this unit! D:',
        500,
      ),
    );
  }
  res.status(201).json({ message: 'Unit succesfully created! :D' });
};

const updateTemiUnitById = async (req, res, next) => {
  const temiId = req.params.temiId;
  const newValues = req.body;
  let temiSpecified;

  try {
    temiSpecified = await TemiUnit.findById(temiId);
  } catch (err) {
    console.error(err);
    return next(new HttpError('Place to be updated could not be found! D:', 404));
  }

  for (var key in newValues) {
    if (!temiSpecified[key]) {
      return next(new HttpError(`Invalid key in update request`, 500));
    }
    temiSpecified[key] = newValues[key];
  }

  try {
    await temiSpecified.save();
    res.status(200).json({ updatedTemi: temiSpecified.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError('Something went wrong while saving the updated unit! D:', 500));
  }
};

const deleteTemiUnitById = (req, res, next) => {};

const getTemiUnitsByAppId = (req, res, next) => {};

exports.getAllTemiUnits = getAllTemiUnits;
exports.addNewTemiUnit = addNewTemiUnit;
exports.updateTemiUnitById = updateTemiUnitById;
exports.deleteTemiUnitById = deleteTemiUnitById;
exports.getTemiUnitsByAppId = getTemiUnitsByAppId;
