const mongoose = require('mongoose');

const bountySchema = new mongoose.Schema({
  created_at: { type: Date, default: new Date() },
  title: { type: String },
  about: { type: String },
  budget: { type: String },
  devInstructions: { type: String },
  judgingCriteria: { type: String },
  rewardDistribution: { type: String },
  submissionRequirement: { type: String },
  resources: { type: String },
  image_hash: { type: String },
  walletAddress: { type: String },
  haveHunters: { type: Boolean, default: false },
  totalHunters: { type: Number, default: 0 },
  category: { type: String },
  type: { type: String },
  winners: [
    {
      submissionId: { type: mongoose.Schema.Types.ObjectId },
      rank: { type: Number },
      prizeAmount: { type: Number }
    }
  ],
  startAt: { type: Date },
  endAt: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId },
  isWinnerAnnounced: { type: Boolean, default: false },
  winnerAnnouncedAt: { type: Date }
});

module.exports = mongoose.model('bounty', bountySchema);