const passportLocalMongoose = require('passport-local-mongoose')
const Schema = require('mongoose').Schema

const chordsSchema = new require ('mongoose').Schema({
  title: String,
  key: String,
  author: String,
  partiture: String
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}
})

module.exports = require('mongoose').model('Chords', chordsSchema);