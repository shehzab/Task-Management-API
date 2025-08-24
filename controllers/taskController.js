import Task from '../models/Task.js';
import { taskCreateValidation, taskUpdateValidation } from '../middleware/validation.js';

// Get all tasks for user
export const getTasks = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status, category, priority } = req.query;
    
    // Build filter object
    const filter = { user: req.user._id };
    if (status) filter.status = status;
    if (category) filter.category = category;
    if (priority) filter.priority = priority;
    
    const tasks = await Task.find(filter)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 });
    
    const total = await Task.countDocuments(filter);
    
    res.json({
      tasks,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    next(error);
  }
};

// Get single task
export const getTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({ 
      _id: req.params.id, 
      user: req.user._id 
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Create new task
export const createTask = async (req, res, next) => {
  try {
    // Validate input
    const { error } = taskCreateValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    
    const task = await Task.create({
      ...req.body,
      user: req.user._id
    });
    
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

// Update task
export const updateTask = async (req, res, next) => {
  try {
    // Validate input - use update validation (title not required)
    const { error } = taskUpdateValidation(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    
    let task = await Task.findOne({ 
      _id: req.params.id, 
      user: req.user._id 
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    res.json(task);
  } catch (error) {
    next(error);
  }
};

// Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findOne({ 
      _id: req.params.id, 
      user: req.user._id 
    });
    
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    
    await Task.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Task removed' });
  } catch (error) {
    next(error);
  }
};