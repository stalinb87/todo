var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var todo = new Schema({
  user_id: {required:true,type:String},
  date:{type:Date,default:Date.now},
  content:String
});
module.exports=mongoose.model('todo',todo);
