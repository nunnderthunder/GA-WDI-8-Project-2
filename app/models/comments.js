var mongoose = require('mongoose');
var User = require('./user')


var commentSchema = mongoose.Schema({
    comment : {
        text : String
        },
    user : {
        account : { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    }
});

module.exports = mongoose.model('Comment', commentSchema);