const mongoose = require('mongoose');

const tasknewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Tasknew = mongoose.model('Tasknew', tasknewSchema);

module.exports = Tasknew;
