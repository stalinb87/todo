var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Todo = new Schema({
  user_id: String,
  content: String,
  updated_at:Date
});
mongoose.model('Todo',todo);
mongoose.connect('mongodb://localhost/express-todo');