var mongoose = require('mongoose')
var message = mongoose.model('Message')
var comment = mongoose.model('Comment')

module.exports = {
  getAll: (req, res) => {
    message.find()
      .populate('comments')
      .exec((err, data) => {
        res.json(data)
      })  
  },
  newMessage: (req, res) => {
    let newMessage = new Message(req.body)
    newMessage.save()
      .then(() => {res.json(true)})
      .catch(err => {console.log('Save Error', err); res.json(false)})
  },
  newComment: (req, res) => {
    message.findOne({_id: req.params.id}, (err, message) => {
      let newComment = new Comment(req.body)
      newComment._message = message._id
      message.comments.push(comment)
      comment.save(err => {
        message.save(err => {
          if  (err) {console.log('Comment save error', err); res.json(false)}
          else {res.json(true)}
        })
      })
    })
  }
}