const express = require('express');
const router = express.Router();
const Task = require('../modles/WeekTask.js');

// Create a new task

router.post('/week/tasks', async (req, res) => {
  try {
    const { title, description, day, time } = req.body;
    
    
    if (!title || !description || !day || !time) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }
    
    const task = new Task({ title, description, day, time });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


// Get all tasks
router.get('/week/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Update a task
router.put('/week/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, day, time, completed } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { title, description, day, time, completed }, { new: true });
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Delete a task
router.delete('/week/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
