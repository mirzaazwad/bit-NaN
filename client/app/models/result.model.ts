import mongoose, { Schema, Document, Types } from 'mongoose';


export interface IResult extends Document {
    userId: Types.ObjectId;
    quizId: Types.ObjectId;
    questionId: Types.ObjectId;
    answerGiven: string;
    isCorrect: boolean;
}


const resultSchema: Schema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    },
    answerGiven: {
        type: String,
        required: true
    },
    isCorrect: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

// Create the Result model
const Result = mongoose.models.Result || mongoose.model<IResult>('Result', resultSchema);

export default Result;
