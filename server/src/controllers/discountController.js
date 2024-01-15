import { Discount } from '../models/discount/discount.js'

export const createDiscount = async (req, res) => {
  try {
    const newDiscount = new Discount({
      ...req.body
    })
    await newDiscount.save()
    res.status(201).json(newDiscount)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteDiscount = async (req, res) => {
  try {
    const deleteDiscount = await Discount.findByIdAndDelete(req.params.id)
    if (!deleteDiscount) return res.status(404).json({ message: 'Not Found' })
    res.status(200).json(deleteDiscount)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateDiscount = async (req, res) => {
  try {
    const updateDiscount = await Discount.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updateDiscount) return res.status(404).json({ message: 'Not Found' })
    res.status(201).json(updateDiscount)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllDiscounts = async (req, res) => {
  try {
    const allDiscounts = await Discount.find({})
    if (!allDiscounts) return res.status(404).json({ message: 'Not Found' })
    res.status(200).json(allDiscounts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
