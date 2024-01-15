import { Schema, model } from 'mongoose'

const sizeSchema = new Schema({
  name: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Size = model('Size', sizeSchema)

export default Size
