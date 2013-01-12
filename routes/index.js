
/*
 * GET home page.
 */
 var models = require('../models');
 var Todo = models.Todo;
 var User = models.User;

var user;

User.findOne(function (err, _user) {
  user = _user;
});


 exports.index = function(req, res){
// var Todo = [{content:"content"}];
Todo.find({}).populate('owner').sort('updated_at').exec(function(err,todos,count){
  res.render('index', { title: 'TODO LIST',todos:todos });
});

};
exports.create = function ( req, res ){
  console.log(req.body.content);
  new Todo({
    owner: user,
    content    : req.body.content,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};

exports.destroy = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.remove( function ( err, todo ){
      res.redirect( '/' );
    });
  });
}