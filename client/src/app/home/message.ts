export class Message {
  _id: string
  author: string
  message: string
  comments: [{
    _id: string
    author: string
    comment: string
    createdAt: Date
    updatedAt: Date
  }]
  createdAt: Date
  updatedAt: Date
}
