import { Schema } from "mongoose";

export const CarSchema = new Schema(
    {
        Model: { type: String, required: true, minLength: 1, maxLength: 50 },
        Year: { type: Number, required: true, min: 1700, max: 2025 },
        Mpg: { type: Number, required: true, min: 1, max: 2500 },
        hasTurbo: { type: Boolean, default: false },
        isSupercharged: { type: Boolean, default: false },
        SeatCapacity: { type: Number, required: true, max: 200 },
        Horsepower: { type: Number, required: true, min: 1, max: 100000 },
        Weight: { type: Number, required: true, min: 1, max: 100000 },
        TrimModel: { type: String, minLength: 1, maxLength: 200 },
        Displacement: { type: String, minLength: 1, maxLength: 50 },
        Description: { type: String, required: true, minLength: 1, maxLength: 2000 },
        Engine: {
            type: String, required: true, enum: ['Two-Stroke', 'Four-Stroke', 'I3', 'I4', 'I5', 'I6',
                'V4', 'V6', 'V8', 'V10', 'V12', 'V16', 'F4', 'Boxer', 'Radial', 'Electric', 'Hybrid', 'Other'],
            default: 'Other'
        },
        Make: {
            type: String, required: true, enum: ['GMC', 'Ford', 'Chevy', 'Jeep', 'Dodge', 'Chrysler',
                'Suzuki', 'Toyota', 'Kia', 'Buick', 'BMW', 'Mazda', 'Subaru', 'Hyundai', 'Bentley', 'Volvo',
                'Mercedes-Benz', 'Porsche', 'Ferrari', 'Lexus', 'Jaguar', 'Audi', 'Lancia', 'Lincoln', 'Nissan',
                'Honda', 'Fiat', 'Acura', 'VW', 'Infiniti', 'Tesla', 'Cadillac', 'Rolls-Royce', 'Lamborghini', 'Other'],
            default: 'Other'
        },
        Drivetrain: { type: String, enum: ['4x4', 'RWD', 'FWD', 'AWD'], required: true },
        BodyType: {
            type: String, enum: ['Sedan', 'Coupe', 'Roadster', 'SUV', 'Hatchback', 'Van', 'Mini-van', 'Hearse', 'Pickup', '6x6', 'ATV', 'Other'],
            required: true, default: 'Other'
        },
        FuelType: { type: String, required: true, enum: ['Gas', 'Diesel', 'Hybrid', 'Electric'], default: 'Gas' },
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