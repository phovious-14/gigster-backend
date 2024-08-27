const mongoose = require("mongoose");
const Sponser = require("../model/sponser.js");
const Hunter = require("../model/hunter.js");
const Bounty = require("../model/bounty.js");
const BountySubmission = require("../model/bountySubmission.js");

exports.createSponserProfile = async (req, res) => {
  try {
    const {
      companyName,
      companyUserName,
      companyUrl,
      bio,
      twitterUrl,
      industry,
      walletAddress
    } = req.body;

    const sponser = new Sponser({
      companyName,
      companyUserName,
      companyUrl,
      bio,
      twitterUrl,
      industry,
      walletAddress,
    });
    await sponser.save();

    res.status(200).json({ message: "sponser created successfully" });

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to create sponser" });
  }
};

exports.createHunterProfile = async (req, res) => {
  try {
    const {
      name,
      uniqueName,
      github,
      bio,
      twitter,
      linkedin,
      walletAddress,
      workAt,
      location

    } = req.body;

    const hunter = new Hunter({
      name,
      uniqueName,
      github,
      bio,
      twitter,
      linkedin,
      walletAddress,
      workAt,
      location
    });
    await hunter.save();

    res.status(200).json({ message: "hunter created successfully" });

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to create hunter" });
  }
};

exports.createBounty = async (req, res) => {
  try {
    const {
      title,
      about,
      category,
      type,
      budget,
      devInstructions,
      judgingCriteria,
      rewardDistribution,
      submissionRequirement,
      resources,
      walletAddress
    } = req.body;

    const bounty = new Bounty({
      title,
      about,
      category,
      type,
      budget,
      devInstructions,
      judgingCriteria,
      rewardDistribution,
      submissionRequirement,
      resources,
      walletAddress
    });
    await bounty.save();

    res.status(200).json({ message: "bounty created successfully" });

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to create sponser" });
  }
};

exports.createBountySubmission = async (req, res) => {
  try {
    const {
      submissionLink,
      twitterLink,
      anythingElse,
      walletAddress,
      bountyId
    } = req.body;

    const bountySubmission = new BountySubmission({
      submissionLink,
      twitterLink,
      anythingElse,
      walletAddress,
      bountyId
    });

    await bountySubmission.save();

    res.status(200).json({ message: "bounty submitted successfully" });

  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ error: "Failed to submit bounty" });
  }
};

exports.getAllBounties = async (req, res) => {
  const bounties = await Bounty.find({}).sort({
    created_at: -1,
  });
  if (bounties == null) {
    return res.status(200).json({ bounties: [] });
  }
  return res.status(200).json(bounties);
};

exports.getBountyById = async (req, res) => {
  const { bountyId } = req.params;
  const bounty = await Bounty.findOne({ _id: bountyId })

  if (bounty == null) {
    return res.status(200).json({ bounty: [] })
  }
  return res.status(200).json(bounty)
};

exports.getSponserProfile = async (req, res) => {
  const { walletAddress } = req.params;
  const sponser = await Sponser.findOne({ walletAddress })

  if (sponser == null) {
    return res.status(200).json({ bounty: [] })
  }
  return res.status(200).json(sponser)
};

exports.getSponserBounties = async (req, res) => {
  const { walletAddress } = req.params;
  const bounties = await Bounty.find({ walletAddress })
console.log(bounties);

  if (bounties == null) {
    return res.status(200).json({ bounty: [] })
  }
  return res.status(200).json(bounties)
};

exports.getHunterProfile = async (req, res) => {
  const { walletAddress } = req.params;
  const hunter = await Hunter.findOne({ walletAddress })

  if (hunter == null) {
    return res.status(200).json({ hunter: [] })
  }
  return res.status(200).json(hunter)
};

exports.addWinners = async (req, res) => {
  const { walletAddress, bountyId } = req.params;

  const { winner1SubmissionId, winner2SubmissionId, winner3SubmissionId, amount1, amount2, amount3 } = req.body

  const winners = await Bounty.findOneAndUpdate({ walletAddress, _id: bountyId }, {
    $push: {
      winners: {
        $each: [
          { submissionId: winner1SubmissionId, rank: 1 },
          { submissionId: winner2SubmissionId, rank: 2 },
          { submissionId: winner3SubmissionId, rank: 3 }
        ]
      }
    },
  },
    { new: true })

  if (winners == null) {
    return res.status(200).json({ winners: [] })
  }
  return res.status(200).json(winners)
};

exports.findUserType = async (req, res) => {
  const { walletAddress } = req.params;
  console.log(walletAddress);
  
  const hunter = await Hunter.findOne({ walletAddress })

  if (hunter === null) {
    await Sponser.findOne({ walletAddress })
    return res.status(200).json({userType: 'sponser'})
  } else {
    return res.status(200).json({userType: 'hunter'})
  }
};

exports.getProjectOfBountyById = async (req, res) => {
  const { bountyId } = req.params;
  
  const bountySubmission = await BountySubmission.find({ bountyId })

  return res.status(200).json(bountySubmission)
}