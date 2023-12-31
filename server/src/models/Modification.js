import { Schema } from "mongoose";

export const ModificationSchema = new Schema(
    {
        carId: { type: Schema.Types.ObjectId, required: true, ref: 'Car' },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
        description: { type: String, required: true, minLength: 1, maxLength: 2500 },
        modType: { type: String, required: true, enum: ['Engine', 'Utility', 'Interior', 'Cosmetic', 'Performance', 'Other'], default: 'Other' },
        name: { type: String, required: true, minLength: 1, maxLength: 200 },
        imgUrl: { type: String, required: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

ModificationSchema.virtual('creator',
    {
        localField: 'creatorId',
        foreignField: '_id',
        ref: 'Account',
        justOne: true
    })

ModificationSchema.virtual('car',
    {
        localField: 'carId',
        foreignField: '_id',
        ref: 'Car',
        justOne: true
    })

ModificationSchema.virtual('favoriteCount', {
    localField: '_id',
    foreignField: 'modId',
    ref: 'FavoriteMod',
    count: true
})

