import { Schema, model } from 'mongoose'

const iconSchema = new Schema({
  title: { type: String },
  path: { type: String }
})

const settingSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
    unique: true,
    required: true
  },
  description: {
    type: String,
    lowercase: true,
    trim: true,
    required: true
  },
  whiteLogo: { type: String, required: true },
  darkLogo: { type: String, required: true },
  navIcons: [iconSchema],
  socialIcon: [iconSchema]
})

export const settingModel = model('Settings', settingSchema)
