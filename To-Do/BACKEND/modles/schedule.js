const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const scheduleSchema = new Schema({

Date:{
     type:Date,
     require:true
   },
Member_id:{
    type:String,
    require:true
     },
timeslot:{
        type:String,
        require:true
      },
Trainer_name:{
    type:String,
    require:true
      },
status:{
    type:String,
    require:true
  },

})

const schedule = mongoose.model("schedule",scheduleSchema);

module.exports = schedule;