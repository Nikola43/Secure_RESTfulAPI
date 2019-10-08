let mongoose = require('mongoose');
let Schema = mongoose.Schema;

var User = new Schema(
  {
    invited_by: {
      type: String,
      required: [true, 'invited_by is required'],
      lowercase: true
    },
    name: {
      type: String,
      required: [true, 'name is required'],
      lowercase: true
    },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, 'password is required']
    },
    invited_list: {
      type: Array,
      required: false,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', User);
