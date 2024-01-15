import Color from '../models/color/colorModel.js'

export const createColor = async (req, res) => {
  try {
    const newColor = {
      ...req,
      body
    }
    await newColor.save()
    res.status(200).json({ message: 'Color Created' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllColors = async (req, res) => {
  try {
    const getColors = await Color.find({}).populate('Product')
    res.status(200).json({ message: 'Getting All Colors', Colors: getColors })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getColorById = async (req, res) => {
  try {
    const { id } = req.params
    const findColor = await Color.findById(id).populate('Product')
    if (!findColor) return res.status(404).json({ message: 'Color not found' })
    res.status(200).json({ message: 'Get Color By Id', findColor })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateColor = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updateColor = await Color.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    )
    if (!updateColor)
      return res.status(404).json({ message: 'Color not found' })

    res.status(200).json({ message: 'Color updated', updateColor })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteColor = async (req, res) => {
  try {
    const { id } = req.params
    const deleteColor = await Color.findByIdAndDelete(id)
    if (!deleteColor)
      return res.status(404).json({ message: 'Color not found' })
    res.status(200).json({ message: 'Color Deleted', deleteColor: deleteColor })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
