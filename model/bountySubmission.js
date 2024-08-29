const mongoose = require('mongoose');

const bountyProjectSchema = new mongoose.Schema({
  title: { type:String }, 
  submittedAt: { type: Date, default: new Date() },
  submissionLink: { type: String },
  twitterLink: { type: String },
  anythingElse: { type: String },
  walletAddress: { type: String },
  inputWalletAddress: { type: String },
  winner: {
      rank: { type: Number }
  },
  isWinner: { type: Boolean },
  bountyId: { type: String }, //bounty id as foreign key
});

module.exports = mongoose.model('bountySubmission', bountyProjectSchema);