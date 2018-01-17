const express = require('express');
const router = express.Router();
const Room = require('../model/room.js')

//Get all rooms from the db
/*Sample Data
http://localhost:8081/api/getallrooms
*/
router.get('/api/getallrooms',function(req,res,next){
    Room.find().then(function(rooms){
        res.send(rooms);
    }).catch(next);      
});

//Get a room details from the db
/*Sample Data
http://localhost:8081/api/rooms?roomNumber=101
*/
router.get('/api/rooms',function(req,res,next){
    Room.find({roomnumber:req.query.roomNumber}).then(function(rooms){
        res.send(rooms);
    }).catch(next);      
});


//add a new room to the db
/*Sample Data
http://localhost:8081/api/rooms
{
	"roomnumber":101,
	"adultscapacity":5,
	"childrencapacity":2,
	"price":100,
	"available":true
}
*/
router.post('/api/rooms',function(req,res,next){        
    console.log(req.body);
    Room.create(req.body).then(function(room){
        res.send(room);
    }).catch(next);    
});

//delete a room from the db
/*Sample Data
http://localhost:8081/api/rooms/59f9c35fbb5a6f2b2856bf31
*/
router.delete('/api/rooms/:id',function(req,res,next){        
    Room.findByIdAndRemove({_id:req.params.id}).then(function(room){
        res.send(room);
    }).catch(next);   
});

//update a room in the db
/*Sample Data
http://localhost:8081/api/rooms/59f9c4931e19bf178855d473
{
	"price":300
}
*/
router.put('/api/rooms/:id',function(req,res,next){        
    Room.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Room.findOne({_id:req.params.id}).then(function(room){
            res.send(room);
        })       
    }).catch(next);   
});

module.exports=router;