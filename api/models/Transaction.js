const mongoose =require('mongoose');
const Schema = mongoose.Schema;


let transactionSchema = new Schema({
    name1: {
        type: String,
        required: true
    },
    name2: {
        type: String
    },
    amount: {
        type: Number
    }
},{
    collection: 'BasicBank'
}

)
module.exports = mongoose.model('Transaction', transactionSchema)