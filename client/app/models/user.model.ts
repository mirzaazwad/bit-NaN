import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';


interface IUser extends Document {
    email: string;
    password: string;
    username: string;
}


interface IUserModel extends Model<IUser> {
    signup(email: string, password: string, username: string): Promise<IUser>;
    login(email: string, password: string): Promise<IUser>;
}

const userSchema = new Schema<IUser, IUserModel>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
});


userSchema.statics.signup = async function (email: string, password: string, username: string): Promise<IUser> {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);
    const user = await this.create({ email, password: hashed, username });
    return user;
};


userSchema.statics.login = async function (email: string, password: string): Promise<IUser> {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw new Error('Incorrect Password');
    }
    throw new Error('Incorrect Email');
};


const User = (mongoose.models.User || mongoose.model<IUser, IUserModel>('User', userSchema)) as IUserModel;

export default User;
export type { IUser };
