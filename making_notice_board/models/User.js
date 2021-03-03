const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required!"],//require처럼  true || false 를 넣은 후 문자열을 담으면 에러메세지가 문자열로 출력됩니다
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      select: false,//select:false로 설정하면 DB에서 해당 모델을 읽어 올때 해당 항목값을 읽어오지 않습니다
    },
    name: { type: String, required: [true, "Name is required!"] },
    email: { type: String },
  },
  {
    toObject: { virtuals: true },
  }
);

userSchema.virtual('passwordConfirmation')
  .get(function(){ return this._passwordConfirmation; })
  .set(function(value){ this._passwordConfirmation=value; });

userSchema.virtual('originalPassword')
  .get(function(){ return this._originalPassword; })
  .set(function(value){ this._originalPassword=value; });

userSchema.virtual('currentPassword')
  .get(function(){ return this._currentPassword; })
  .set(function(value){ this._currentPassword=value; });

userSchema.virtual('newPassword')
  .get(function(){ return this._newPassword; })
  .set(function(value){ this._newPassword=value; });

userSchema.path('password').validate(function(v){
  let user = this;

}) 

