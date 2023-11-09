import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true, maxLength: 20 },
    picture: { type: String },
    bio: { type: String, required: false }
    // NOTE If you wish to add additional properties do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

