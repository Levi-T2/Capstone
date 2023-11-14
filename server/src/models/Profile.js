import { Schema } from "mongoose";

export const ProfileSchema = new Schema(
    {
      
      name: { type: String, required: true, maxLength: 20 },
      picture: { type: String, required: true },
      bio: { type: String, required: false }
      
    },
    { timestamps: true, toJSON: { virtuals: true } }
  )