const express=require("express");
const router=express.Router();

const {createActivity, endActivity, accessActivity,getAllactivitiesForSpecificUser}=require("../controller/activityController");

router.route("/activity").post(createActivity)
router.route("/activityEnd/:id").patch(endActivity)
router.route("/activityAccess/:activityCode").get(accessActivity)
router.route("/activitiesPerUser/:id").get(getAllactivitiesForSpecificUser)
module.exports=router;



