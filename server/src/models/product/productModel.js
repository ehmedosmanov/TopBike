import { Schema, model } from 'mongoose'

const productSchema = new Schema(
  {
    title: { type: String, required: true, trim: true }, //+
    description: { type: String, required: true, trim: true }, //+
    price: { type: Number, required: true, min: 0 }, //+
    discount: { type: Schema.Types.ObjectId, ref: 'Discount' }, //-
    mainImage: { type: String, required: true, trim: true }, //+
    images: [{ type: String, trim: true }], //-
    colors: [{ type: String }], //-
    sizes: [{ type: String }], //-
    tags: [{ type: String }], // -
    stock: { type: Number, default: 0 }, //-
    isActive: { type: Boolean, default: true }, //+
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }], // -
    reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }] // -
  },
  { timestamps: true }
)

export const Product = model('Product', productSchema)
