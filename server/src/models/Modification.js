import { Schema } from "mongoose";

export const ModificationSchema = new Schema(
    {
        carId: { type: Schema.Types.ObjectId, required: true, ref: 'Car' },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
        description: { type: String, required: true, minLength: 1, maxLength: 2500 },
        modType: { type: String, required: true, enum: ['Engine', 'Utility', 'Interior', 'Cosmetic', 'Performance', 'Other'], default: 'Other' }
    }
)