const express = require('express');
const router = express.Router();
const Task = require('../modles/WeekTask.js');

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get completed tasks
router.get('/completed', async (req, res) => {
  try {
    const tasks = await Task.find({ completed: true });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.title = req.body.title;
    task.description = req.body.description;
    task.date = req.body.date;
    task.time = req.body.time;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Mark task as complete
router.patch('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });

    task.completed = req.body.completed;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task


router.route("/delete/:id").delete(async (req, res) => {
  const task = req.params.id;

  Task.findByIdAndDelete(task)
      .then(() => {
          res.json("Task deleted successfully");
      })
      .catch((err) => {
          console.log(err);
          res.status(400).json("Error: " + err);
      });
});

module.exports = router;
