import express from 'express';
import { getProfile, updateProfile } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// All routes require authentication
router.use(auth);

router.route('/profile')
  .get(getProfile)
  .put(updateProfile);

export default router;