var controller = require('../controllers/user_controller');
var posts_controller = require('../controllers/posts_controller');

module.exports = function(app) {
    app.post('/api/login', controller.login);
    app.get('/api/current', controller.current);
    app.get('/logout', controller.logout);
    app.post('/api/register', controller.register);
    app.post('/api/posts', posts_controller.createPost);
    app.get('/api/posts', posts_controller.allPosts);
    app.get('/api/posts/:id', posts_controller.singlePost);
    app.get('/api/userPost', posts_controller.showUserPost);

}
