const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    email:{
        type : String,
        require : true
    },
    sender:{
        type : String,
        require : true
    },
    receiver:{
        type : String,
        require : true
    },
    value:{
        type : String,
        require : true
    },
    gasLimit:{
        type : String,
        require : true
    },
    gasPrice:{
        type : String,
        require : true
    },
    Hash:{
        type : String,
        require : true
    },
    status : {
        type : Boolean,
        default : false
    }},
    {
        timestamps:true
    },
);

module.exports = mongoose.model('Transaction', transactionSchema)