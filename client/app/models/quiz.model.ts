import mongoose, { Document, Model, Schema } from 'mongoose';

interface IQuestionRef {
    questionId: mongoose.Schema.Types.ObjectId;
}


export interface IQuiz extends Document {
    title: string;
    author: string;
    questions: IQuestionRef[];
    createdAt: Date;
    updatedAt: Date;
}


interface IQuizModel extends Model<IQuiz> {}

// Define mongoose schema for Quiz
const quizSchema = new Schema<IQuiz, IQuizModel>({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    questions: [
        {
            questionId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Question',
            },
        },
    ],
}, {
    timestamps: true,
});


const Quiz: IQuizModel = mongoose.models.Quiz || mongoose.model<IQuiz, IQuizModel>('Quiz', quizSchema);

export default Quiz;

