const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodSchema = new Schema({
  title: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  photos: [String],
  ingredients: [String],
  nutritions:[String],
  popular:{
    type: Boolean,
    default: false,
  },
  instructions: [String],
  time: Number,
  category:String,
  difficulty:String,
  comments: {
    type: Array,
    default: [],
  }
  });
  
  module.exports = mongoose.model('Food', foodSchema);


