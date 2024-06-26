import mongoose, { Document, Schema } from 'mongoose';


interface ITime extends Document {
    hours: number;
    minutes: number;
    seconds: number;
}

// Schema for time
const timeSchema: Schema<ITime> = new mongoose.Schema({
    hours: {
        type: Number,
        required: true,
        min: 0
    },
    minutes: {
        type: Number,
        required: true,
        min: 0,
        max: 59
    },
    seconds: {
        type: Number,
        required: true,
        min: 0,
        max: 59
    }
}, {
    _id: false 
});

export default timeSchema;
export type { ITime };
