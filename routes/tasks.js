import express from 'express';
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

router.route('/')
  .get(getTasks)
  .post(createTask);

router.route('/:id')
  .get(getTask)
  .put(updateTask)
  .delete(deleteTask);

export default router;