import mongoose from "mongoose";
const Schema = mongoose.Schema;


let transactionSchema = new Schema({
    sender: {
        type: String,
        required: true
    },
    receiver: {
        type: String
    },
    amount: {
        type: Number
    }
},{
    collection: 'Transactions'
}

)
export default mongoose.model('Transaction', transactionSchema)