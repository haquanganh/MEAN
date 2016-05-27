var Post = require('../models/posts.js');
module.exports = function($app) {
    $app.post('/add', function(req, res, next) {
        var post = new Post({
            title : req.body.title,
            content: req.body.content,
            author: req.body.author,
            creationDate : req.body.date
        });
        post.save(function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log('Good');
            }
        });
        next();
    });
}
