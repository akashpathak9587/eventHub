import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  firstName: { type: String },
  lastName: { type: String },
  photo: { type: String, required: true },
});

const User = models.User || model("User", UserSchema);

export default User;
