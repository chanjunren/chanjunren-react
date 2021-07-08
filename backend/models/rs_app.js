const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  units: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Unit' }],
});

module.exports = mongoose.model('Application', appSchema);
