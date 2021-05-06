const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//create schema for account
const AccountSchema = new Schema({
    name: {
        type: String,
        required: 'name is required'
    },
    password: {
        type: String,
        required: 'password is required'
    },
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

//create model for account
const Account = mongoose.model('account', AccountSchema);

module.exports = Account;