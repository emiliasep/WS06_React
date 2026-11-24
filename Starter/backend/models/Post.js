const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    // TODO: Add title field with String type, required validation, trim, and minlength
    // TODO: Add content field with String type, required validation, trim, and minlength
    // TODO: Add author field with String type, required validation, and trim
    title: {
      type: String, 
      required: true, 
      trim: true,
      minlenght: 5,
    },
    content: {
      type: String, 
      required: true, 
      trim: true,
      minlenght: 6,
    },
    author: {
      type: String, 
      required: true, 
      trim: true
    },
  },
 
  {
    // TODO: Enable timestamps to track creation and update times
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', postSchema);