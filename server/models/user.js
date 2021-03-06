var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
  name: {type: String, required: [true, "Name is required!"], minlength: [2, "Name must be at least 2 characters long!"]}
}, {timestamps: true});

userSchema.method.addJayToString = function(input){
  return input+"Jay";
}

mongoose.model('User', userSchema);
