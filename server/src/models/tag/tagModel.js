import { Schema, model } from 'mongoose'

const tagSchema = new Schema({
  name: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Tag = model('Tag', tagSchema)

export default Tag
