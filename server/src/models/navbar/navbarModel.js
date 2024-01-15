import { Schema, model } from 'mongoose'

const dropdownItemSchema = new Schema({
  title: { type: String },
  to: { type: String }
})

const dropdownSchema = new Schema({
  heading: { type: String },
  to: { type: String },
  items: [dropdownItemSchema],
  dropdownImage: { type: String }
})

const navbarItemSchema = new Schema(
  {
    title: { type: String },
    link: { type: String },
    isDropdown: { type: Boolean, default: false },
    dropdown: [dropdownSchema],
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
  },
  { timestamps: true }
)

const navbarModel = model('Navbar', navbarItemSchema)

export default navbarModel
