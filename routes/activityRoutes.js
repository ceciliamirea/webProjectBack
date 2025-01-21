const express=require("express");
const router=express.Router();

const {createActivity, endActivity, accessActivity,getAllactivitiesForSpecificUser,getAllactivitiesForSpecificStudent}=require("../controller/activityController");

router.route("/activity").post(createActivity)
router.route("/activityEnd/:id").patch(endActivity)
router.route("/activityAccess/:activityCode/:userId").get(accessActivity)
router.route("/activitiesPerUser/:id").get(getAllactivitiesForSpecificUser)
router.route("/activitiesPerStudent/:id").get(getAllactivitiesForSpecificStudent)
module.exports=router;



