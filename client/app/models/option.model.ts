import mongoose, { Document, Schema } from 'mongoose';


interface IOption extends Document {
    text: string;
    isCorrect: boolean;
}


const optionSchema: Schema<IOption> = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    }
}, {
    _id: false 
});

export default optionSchema;
export type { IOption };
