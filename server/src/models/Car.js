import { Schema } from "mongoose";

export const CarSchema = new Schema(
    {
        model: { type: String, required: true, minLength: 1, maxLength: 50 },
        year: { type: Number, required: true, min: 1700, max: 2025 },
        mpg: { type: Number, required: true, min: 1, max: 2500 },
        hasTurbo: { type: Boolean, default: false },
        isSupercharged: { type: Boolean, default: false },
        seatCapacity: { type: Number, required: true, max: 200 },
        horsepower: { type: Number, required: true, min: 1, max: 100000 },
        weight: { type: Number, required: true, min: 1, max: 100000 },
        trimModel: { type: String, minLength: 1, maxLength: 200 },
        displacement: { type: String, minLength: 1, maxLength: 50 },
        description: { type: String, required: true, minLength: 1, maxLength: 2000 },
        imgUrl: { type: String, required: true },
        imgUrls: {type: [String], default: []},
        engine: {
            type: String, required: true, enum: ['Two-Stroke', 'Four-Stroke', 'I3', 'I4', 'I5', 'I6',
                'V4', 'V6', 'V8', 'V10', 'V12', 'V16', 'F4', 'Boxer', 'Radial', 'Electric', 'Hybrid', 'Other'],
            default: 'Other'
        },
        make: {
            type: String, required: true, enum: ['GMC', 'Ford', 'Chevy', 'Jeep', 'Dodge', 'Chrysler',
                'Suzuki', 'Toyota', 'Kia', 'Buick', 'BMW', 'Mazda', 'Subaru', 'Hyundai', 'Bentley', 'Volvo',
                'Mercedes-Benz', 'Porsche', 'Ferrari', 'Lexus', 'Jaguar', 'Audi', 'Lancia', 'Lincoln', 'Nissan',
                'Honda', 'Fiat', 'Acura', 'VW', 'Infiniti', 'Tesla', 'Cadillac', 'Rolls-Royce', 'Lamborghini', 'Other'],
            default: 'Other'
        },
        drivetrain: { type: String, enum: ['4x4', 'RWD', 'FWD', 'AWD'], required: true },
        bodyType: {
            type: String, enum: ['Sedan', 'Coupe', 'Roadster', 'SUV', 'Hatchback', 'Van', 'Mini-van', 'Hearse', 'Pickup', '6x6', 'ATV', 'Other'],
            required: true, default: 'Other'
        },
        fuelType: { type: String, required: true, enum: ['Gas', 'Diesel', 'Hybrid', 'Electric'], default: 'Gas' },
        creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    })

CarSchema.virtual('creator', {
    localField: 'creatorId',
    ref: 'Account',
    foreignField: '_id',
    justOne: true
})

CarSchema.virtual('favoriteCount', {
    localField: '_id',
    foreignField: 'carId',
    ref: 'Favorite',
    count: true
})

CarSchema.virtual('modCount', {
    localField: '_id',
    ref: 'Modification',
    foreignField: 'carId',
    count: true
})