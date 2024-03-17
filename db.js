import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB OK');
  } catch (err) {
    console.error('DB error', err);
  }
};

export default connectDB;
