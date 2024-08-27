const mongoose = require('mongoose');

const sponserSchema = new mongoose.Schema({
  created_at: { type: Date, default: new Date() },
  companyName: { type: String },
  companyUserName: { type: String },
  companyUrl: { type: String },
  bio: { type: String },
  twitterUrl: { type: String },
  industry: { type: String },
  logoHash: { type: String },
  walletAddress: { type: String }
});

module.exports = mongoose.model('sponser', sponserSchema);