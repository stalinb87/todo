var mongoose = require('mongoose'),
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  name: {
    type: String,
    index: true
  },
  email: String,
  password: String,
  todos: [{
    type: ObjectId, ref: 'Todo'
  }]
});

var todoSchema = new Schema({
  owner: { type: ObjectId, ref: 'User' },
  content: String,
  updated_at:Date
});

userSchema.pre('remove', function (err) {
  if (!err && this.todos) {
    // Si muere el papa, se van los hijos
    this.todos.forEach(function (todo) {
      todo.remove();
    })
  }
});

// Warning, va a eplota seguramente, pues, estoy oxidado en statics....
userSchema.statics.buscaPorTodo = function (regexp, callback) {
  Todo.find({ content: regexp }, { owner: true }, function (err, todos) {
    usuarios = todos.reduce(function (a,b) {
      if (a.indexOf(b.owner) == -1) return a.concat(b.owner);
      else return [];
    }, []);
    User.find({_id: { $in: ususarios } }, callback);
  });
}

var User = mongoose.model('User', userSchema);
var Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  User: User,
  Todo: Todo
}
