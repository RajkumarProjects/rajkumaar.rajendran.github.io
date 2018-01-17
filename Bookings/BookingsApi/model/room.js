const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create room schema and model
const RoomSchema = new Schema(
    {
        roomnumber:{
            type:Number            
        },
        adultscapacity:{
            type:Number
        },
        childrencapacity:{
            type:Number
        },
        price:{
            type:Number
        },
        available:{
            type: Boolean,
            default:false
        }
    }
);

const Room= mongoose.model('room',RoomSchema)
module.exports= Room