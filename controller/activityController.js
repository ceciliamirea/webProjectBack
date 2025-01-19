const Activity=require("../models/activity");

const createActivity=async(req, res)=>{
    try{
        const body=req.body;
        const activity=await Activity.create(body);
        console.log(body.activityDescription);
        res.status(201).json(activity); 
    }
    catch{
        res.status(400).json(err);

    }
}


const endActivity = async(req,res)=>{
    try {
        const {id:activityId} = req.params
        const activity = await Activity.updateOne({ _id:activityId },{
            $set:{
                endTime : new Date()
            }
        })

        if(activity){
            res.status(200).json("EndTime populated")
        }
        else res.status(404).json("No activity with this id")

    } catch (err) {
        res.status(400).json(err)
    }
}

const accessActivity=async(req, res)=>{
    try{
        const {activityCode:activityCode} = req.params;
        const activity=await Activity.findOne({activityCode:activityCode});
        
        if(activity){

            if(!activity.endTime){
                res.status(200).json({msg:"Activity found and it's available"});
            }
            else{
                res.status(200).json({msg:"Activity found but it's not available"})
            }
           // res.status(200).json(activity);
        }
        else{
            res.status(404).json({msg:"Activity not found"});
        }
    }
    catch(err){
        res.status(400).json(err);

    }
}
const getAllactivitiesForSpecificUser = async (req,res)=>{
    try {
        const {id:userId} = req.params;
        const activities = await Activity.find({
            createdBy : userId
        })
        if(activities){
            res.status(200).json(activities)
        }
        else res.status(404).json("Nope")
    } catch (err) {
        res.status(400).json(err)
    }
}
module.exports={createActivity, accessActivity, endActivity,getAllactivitiesForSpecificUser}
