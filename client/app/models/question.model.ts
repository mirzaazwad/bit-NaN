import mongoose, { Document, Schema, Model } from 'mongoose';
import timeSchema, { ITime } from './time.model';
import optionSchema, { IOption } from './option.model';

export interface IQuestion extends Document {
    question: string;
    options: IOption[];
    answer: string;
    time: ITime;
}




const questionSchema: Schema<IQuestion> = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    options: {
        type: [optionSchema],
        required: true,
        validate: [arrayLimit, '{PATH} must have at least one option']
    },
    answer: {
        type: String,
        required: true
    },
    time: {
        type: timeSchema,
        required: true
    }
}, {
    timestamps: true
});


function arrayLimit(val: IOption[]) {
    return val.length > 0;
}


const Question: Model<IQuestion> = mongoose.models.Question || mongoose.model<IQuestion>('Question', questionSchema);

export default Question;
