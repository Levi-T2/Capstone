import { Schema } from "mongoose";

export const FavoriteModSchema = new Schema(
    {
        modId: { type: Schema.Types.ObjectId, required: true, ref: 'Modification' },
        accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    },
    {
        timestamps: true, toJSON: { virtuals: true }
    }

)

FavoriteModSchema.virtual('car',
    {
        localField: 'carId',
        foreignField: '_id',
        ref: 'Car',
        justOne: true

    })
FavoriteModSchema.virtual('modification',
    {
        localField: 'modId',
        foreignField: '_id',
        ref: 'Modification',
        justOne: true

    })

FavoriteModSchema.virtual('account',
    {
        localField: 'accountId',
        foreignField: '_id',
        ref: 'Account',
        justOne: true
    })

FavoriteModSchema.index({ modId: 1, accountId: 1 }, { unique: true })