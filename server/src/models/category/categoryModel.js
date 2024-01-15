import { Schema, model } from 'mongoose'

const categorySchema = new Schema(
  {
    heading: { type: String, required: true },
    to: { type: String, required: true },
    isParent: { type: Boolean },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    subcategories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
  },
  { timestamps: true }
)

export const Category = model('Category', categorySchema)
