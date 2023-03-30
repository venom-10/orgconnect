const mongoose = require('mongoose');


const postDataSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  postedText: {
    type: String,
    required: true,
  },
  postedImage: {
    data: Buffer,
    contentType: String,
  },
});

const postData = mongoose.post.model("post_data", postDataSchema);

module.exports = postData;