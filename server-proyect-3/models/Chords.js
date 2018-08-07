const passportLocalMongoose = require('passport-local-mongoose')
const Schema = require('mongoose').Schema

const chordsSchema = new require ('mongoose').Schema({
  title: String,
  key: String,
  author: String,
  partiture: String,
  audioURL: String,
  ytURL:String,
  user:{
    type: Schema.Types.ObjectId,
    ref: "User"
  }
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
})

module.exports = require('mongoose').model('Chords', chordsSchema);