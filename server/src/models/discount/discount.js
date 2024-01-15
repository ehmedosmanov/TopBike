import { Schema, model } from 'mongoose'

const discountSchema = new Schema(
  {
    discount: { type: Number, required: true, min: 10 },
    end_date: { type: Date, required: true }
  },
  { timestamps: true }
)

export const Discount = model('Discount', discountSchema)
