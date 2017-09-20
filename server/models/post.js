const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {type: String, minlength: 10, require: true},
    url: {type: String, require: true},
    description: {type: String, minlength: 30, require: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps:true})

mongoose.model('Post', PostSchema)
//
// title
// url
// description
