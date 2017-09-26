let mongoose = require('mongoose');
let Post = mongoose.model('Post');

module.exports = {
    allPosts: (req, res) => {
        // console.log('requesting post')
        Post.find({}).exec((err, posts)=>{
            if(err){
                console.log('error getting posts')
            } else {
                res.json(posts);
                // console.log(posts);
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

    singlePost: (req, res) => {
        // console.log('requesting post')
        Post.findById(req.params.id)
            .exec((err, post)=>{
                if(err){
                    console.log('error getting the post')
                } else {
                    res.json(post);
                    // console.log(posts);
                }
        });
    },

    createPost: (req, res) => {
        if(!req.session.user){
            res.redirect('/')
        } else {
            let newPost = new Post(req.body);
            newPost.save( (err, post) => {
                if(err){
                    console.log('didnt create post')
                } else {
                    return res.json(post)
                }
            })
        }
    },

}
