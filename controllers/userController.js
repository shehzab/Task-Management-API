import User from '../models/User.js';

// Get user profile
export const getProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    next(error);
  }
};

// Update user profile
export const updateProfile = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { username, email },
      { new: true, runValidators: true }
    ).select('-password');
    
    res.json(user);
  } catch (error) {
    next(error);
  }
};