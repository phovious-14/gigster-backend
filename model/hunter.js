const mongoose = require('mongoose');

const hunterSchema = new mongoose.Schema({
  created_at: { type: Date, default: new Date() },
  name: { type: String },
  uniqueName: { type: String },
  portfolio: { tpe: String },
  github: { tpe: String },
  linkedin: { tpe: String },
  twitter: { tpe: String },
  logoHash: { type: String },
  bio: { type: String },
  walletAddress: { type: String },
  skills: [    
    { type: String }
  ],
  submissions: { type: Number },
  Won: { type: Number },
  location: { type: String },
  workAt: { type: String }
});

module.exports = mongoose.model('hunter', hunterSchema);