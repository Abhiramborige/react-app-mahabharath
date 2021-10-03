const { Schema, model } = require('mongoose')

const KeySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true
    },
    key: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    opaque: {
      type: Boolean,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = model('key', KeySchema)