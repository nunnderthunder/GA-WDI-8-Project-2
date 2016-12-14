var mongoose = require('mongoose');

var blogPostSchema = mongoose.Schema({
  _id: 0,
  title: '',
  body: '',
  comments: [{
    person: '',
    comment: '',
    created_at: new Date()
  }],
  created_at: new Date()
});

module.exports = mongoose.model('Post', blogPostSchema);