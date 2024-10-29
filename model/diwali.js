const mongoose = require('mongoose');

const diwaliSchema = new mongoose.Schema({
  created_at: { type: Date, default: new Date() },
  receiverAddress: { type: String },
  greeting: { type: String },
});

module.exports = mongoose.model('diwali', diwaliSchema);