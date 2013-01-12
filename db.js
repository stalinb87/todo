var mongoose = require('mongoose'),
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  name: String,
  email: String,
  password: String
})

var todoSchema = new Schema({
  owner: [Schema.Type.ObjectId, ref: 'User' ],
  content: String,
  updated_at:Date
});
mongoose.model('todo',todo);
