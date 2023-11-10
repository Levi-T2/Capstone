import { Schema } from "mongoose";


export const FavoriteSchema = new Schema(
    {
        carId: { type: Schema.Types.ObjectId, required: true, ref: 'Car' },
        accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)

FavoriteSchema.virtual('car',
    {
        localField: 'carId',
        foreignField: '_id',
        ref: 'Car',
        justOne: true
    }
)

FavoriteSchema.virtual('account',
    {
        localField: 'accountId',
        foreignField: '_id',
        ref: 'Account',
        justOne: true
    })