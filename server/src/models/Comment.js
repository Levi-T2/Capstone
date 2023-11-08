import { Schema } from "mongoose";

export const CommentSchema = new Schema(
    {
        body: { type: String, required: true, minLength: 1, maxLength: 2000 },
        carId: { type: Schema.Types.ObjectId, required: true, ref: 'Car' },
        accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

CommentSchema.virtual('profile',
    {
        localField: 'accountId',
        foreignField: '_id',
        ref: 'Account',
        justOne: true
    })

CommentSchema.virtual('car',
    {
        localField: 'carId',
        foreignField: '_id',
        ref: 'Car',
        justOne: true
    })