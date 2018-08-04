const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const userSchema = new require('mongoose').Schema({
    username: String,
    photoURL: String,
    email: String,
    chords:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Chords'
        }
    ],
    lists:[
      {
          type: Schema.Types.ObjectId,
          ref: 'List'
      }
  ],
  myLists: [
    {
        type: Schema.Types.ObjectId,
        ref: 'List'
    }
  ]
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);