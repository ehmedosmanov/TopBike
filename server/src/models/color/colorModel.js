import { Schema, model } from 'mongoose'

const colorSchema = new Schema({
  name: { type: String, required: true },
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Color = model('Color', colorSchema)

export default Color
