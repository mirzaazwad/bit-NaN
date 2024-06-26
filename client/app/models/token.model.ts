import mongoose from 'mongoose';

const tokenSchema=new mongoose.Schema({
    token:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    logout_time:{
        type:Date,
    },
    login_time:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true
});

const Token=mongoose.models.Token||mongoose.model('Token',tokenSchema);
export default Token;