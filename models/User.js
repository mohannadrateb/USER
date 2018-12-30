const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
name :{
  type :String,
  required:[true,'First name is required']
   

},

LastName:{
type: String,
required:[true,'Last Name is required']



},


email:{


  type :String,
  required:[true,'email is required']


},

age:{
type: Number



},
password:{

  type: String
},

isAdmin:{

type: Boolean,
default : false



}







});



UserSchema.statics.findByEmail = function (email) {
  return User.findOne({
      email
  }).then((user) => {
      if (user) return Promise.reject({
          message: "Warning! This email is already registered."
      });
      return Promise.resolve();
  });
};

let User= mongoose.model('user',UserSchema);
module.exports= User;


