import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import UserModel from '../models/user.js';

const generateToken = (userId) => {
  return jwt.sign({ _id: userId }, 'secret123', { expiresIn: '30d' });
};

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const comparePasswords = async (inputPassword, hashedPassword) => {
  return bcrypt.compare(inputPassword, hashedPassword);
};

export { generateToken, hashPassword, comparePasswords };
