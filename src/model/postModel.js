const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
      type: String
    },
    title: {
      type: String
    },
    img: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0
    },
    Comment: {
      type: [String]
    },
    isDeleted: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);