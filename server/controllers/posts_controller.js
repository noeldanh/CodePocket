let mongoose = require('mongoose');
let Post = mongoose.model('Post');

module.exports = {
    allPosts: (req, res) => {
        Post.find({}).exec((err, posts)=>{
            if(err){
                console.log('error getting posts')
            } else {
                res.json(posts);
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
        Post.findOne({_id: req.params.id}).exec(function(err, singlePost){
            if(err){
                console.log('couldnt show the question')
            } else {
                // req.session.questionId = req.params.id
                // console.log(questionId)
                return res.json(singlePost)
            }
        })
    },

    createPost: (req, res) => {
        console.log(req.body)
        if(!req.session.user){
            res.redirect('/')
        } else {
            let newPost = new Post(req.body);
            newPost._user = req.session.user;
            newPost.save( (err, post) => {
                if(err){
                    console.log(err)
                    return res.json(err)
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
                    // console.log(userPost)
                    return res.json(userPost)
                }
            })
        }

    },

    deletePost: function(req, res){
        if(!req.session.user){
            res.sendStatus(401)
        } else {
            Post.remove({_id: req.params.id}, function(err, result){
                if(err){
                    console.log('couldnt delete')
                } else {
                    return res.json(result)
                }
            })
        }
    },


}
