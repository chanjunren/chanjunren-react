const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
  owner: {
    type: String,
    required: true,
  },
  serialNumber: {
    type: String,
    required: true
  },
  applications: [
    { type: mongoose.Types.ObjectId, required: true, ref: 'Application' },
  ],
});

module.exports = mongoose.model('Unit', unitSchema);
