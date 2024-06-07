const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  day: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});


const Task = mongoose.model('week', TaskSchema);
module.exports = Task;
