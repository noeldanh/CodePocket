let mongoose = require('mongoose');
let post = mongoose.model('Post');

module.exports = {
    allPosts: (req, res) => {
        console.log('requesting post')
        post.find({}).exec((err, posts)=>{
            if(err){
                console.log('error getting post')
            } else {
                res.json(posts);
                console.log(posts);
            }
        });
    },

    current: (req, res) => {
        if(!req.session.user){
            res.sendStatus(401)
        } else {
            return res.json(req.session.user)
            }
    },

}
