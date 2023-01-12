import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  email: {type: String,},
  name: {type: String,},
  password: {type: String,},
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer"
  },
},
{
    timestamps: true
}
);

const User = mongoose.model("User", userSchema);
export default User;