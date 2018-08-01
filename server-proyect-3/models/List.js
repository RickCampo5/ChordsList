const passportLocalMongoose = require('passport-local-mongoose')
const Schema = require('mongoose').Schema

const listsSchema = new require ('mongoose').Schema({
  fecha: Date,
  list: [
    {
      type: Schema.Types.ObjectId,
      ref: "Chords"
    }
  ]
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = require('mongoose').model('List', listsSchema);