var mongoose         = require('mongoose');
var Schema           = mongoose.Schema;
var UserSchema   = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: String,
    fullname: String,
    age: String,
    zip: String
});

module.exports = mongoose.model('User', UserSchema);
