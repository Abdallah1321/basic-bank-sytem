const mongoose =require('mongoose');
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
    collection: 'BasicBank'
}

)
module.exports = mongoose.model('User', userSchema)