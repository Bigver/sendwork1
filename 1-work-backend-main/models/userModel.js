import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    month: { type: String, required: true },
    day: { type: String, required: true },
    year: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    resetToken: { type: String },
    isAdmin: { type: Boolean, default: false, required: true },
    learn: [String]
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
