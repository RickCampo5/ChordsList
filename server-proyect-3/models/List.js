const passportLocalMongoose = require('passport-local-mongoose')
const Schema = require('mongoose').Schema

const listsSchema = new require ('mongoose').Schema({
  date: Date,
  firstTitle: String,
  secondTitle: String,
  message: String,
  keys:[Array],
  chords: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Chords'
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref:'User'
  }

},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = require('mongoose').model('List', listsSchema);