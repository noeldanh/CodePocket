const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = new Schema({
    title: {type: String, require: [true, "title required"]},
    url: {type: String, require: [true, "url required"]},
    description: {type: String, require: [true, "description required"]},
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
}, {timestamps:true})

mongoose.model('Post', PostSchema)
//
// title
// url
// description
