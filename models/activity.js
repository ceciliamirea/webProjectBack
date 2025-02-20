const mongoose=require("mongoose");

const activityschema=new mongoose.Schema({

    activityname: {
        type:String,
        trim: true
    },

    activityDescription : {
        type:String, 
        trim: true
    },

    startTime:{
        type:String, 
        trim: true
    },

    endTime:{
        type:String, 
        trim: true
    },

    activityCode : {
        type:String, 
        trim: true,
        default: makeid(10)
    },
    createdBy : {
        type:String,
        trim:true

    }

})

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

module.exports=mongoose.model("activity", activityschema);