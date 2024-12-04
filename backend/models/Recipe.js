const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  ingredients: [String],
  instructions: String,
  imageUrl: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: { type: Number, default: 0 },
  ratings: [{ user: mongoose.Schema.Types.ObjectId, rating: Number }],
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);