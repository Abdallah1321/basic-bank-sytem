import mongoose from "mongoose";
const Schema = mongoose.Schema;


let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    balance: {
        type: Number
    }
},{
    collection: 'Users'
}

)
export default mongoose.model('User', userSchema)