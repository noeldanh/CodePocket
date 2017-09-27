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
            console.log(req.session.user)
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
        // console.log('does post controller work')
        // console.log(req.body)
        if(!req.session.user){
            res.redirect('/')
        } else {
            let newPost = new Post(req.body);
            newPost._user = req.session.user;
            // console.log(newPost._user)
            newPost.save( (err, post) => {
                if(err){
                    console.log('didnt create post')
                } else {
                    console.log(post)
                    return res.json(post)
                }
            })
        }
    },

    showUserPost: (req, res) => {
        if(!req.session.user){
            return res.sendStatus(401);
        } else {
            Post.find({_user: req.session.user}, (err, userPost)=>{
                if(err){
                    console.log('cant find user bike')
                } else {
                    return res.json(userPost)
                }
            })
        }

    }

}
