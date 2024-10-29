const express = require("express")
const route = express.Router()
const controller = require("../controller/userController")

route.post('/create_sponser_profile', controller.createSponserProfile)

route.post('/create_hunter_profile', controller.createHunterProfile)

route.post('/create_bounty', controller.createBounty)

route.post('/create_bounty_submission/:bountyId/:walletAddress', controller.createBountySubmission)

route.get('/checkBountySubmitted/:bountyId/:walletAddress', controller.checkBountySubmitted)

route.post('/add_reward_distribution/:bountyId', controller.addRewardDistribution)

route.get('/checkRewardDistributed/:bountyId', controller.checkRewardDistributed)

route.post('/add_winners/:bountyId/:walletAddress', controller.addWinners)

route.get('/get_winners/:bountyId', controller.getWinners)

route.get('/get_sponser_profile/:walletAddress', controller.getSponserProfile)

route.get('/get_sponser_bounties/:walletAddress', controller.getSponserBounties)

route.get('/get_sponser_bounties_count/:walletAddress', controller.getSponserBountiesCount)

route.get('/get_hunter_profile/:walletAddress', controller.getHunterProfile)

route.get('/get_bounty_by_id/:bountyId', controller.getBountyById)

route.get('/get_projectsOf_bounty_by_id/:bountyId', controller.getProjectOfBountyById)

route.get('/find_usertype/:walletAddress', controller.findUserType)

route.get('/get_all_bounties', controller.getAllBounties) // all bouties for dashboard

route.get('/get_all_bouties_count', controller.getAllBountiesCount) // all bouties for dashboard

route.post(`/add_diwali_wish`, controller.addDiwaliWish)

 
module.exports = route