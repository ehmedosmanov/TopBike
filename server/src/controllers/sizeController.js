import Size from '../models/size/sizeModel.js'

export const createSize = async (req, res) => {
  try {
    const newSize = {
      ...req,
      body
    }
    await newSize.save()
    res.status(200).json({ message: 'Size Created' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllSizes = async (req, res) => {
  try {
    const getSizes = await Size.find({}).populate('Product')
    res.status(200).json({ message: 'Getting All Sizes', Sizes: getSizes })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getSizeById = async (req, res) => {
  try {
    const { id } = req.params
    const findSize = await Size.findById(id).populate('Product')
    if (!findSize) return res.status(404).json({ message: 'Size not found' })
    res.status(200).json({ message: 'Get Size By Id', findSize })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateSize = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updateSize = await Size.findByIdAndUpdate(id, { name }, { new: true })
    if (!updateSize) return res.status(404).json({ message: 'Size not found' })

    res.status(200).json({ message: 'Size updated', updateSize })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteSize = async (req, res) => {
  try {
    const { id } = req.params
    const deleteSize = await Size.findByIdAndDelete(id)
    if (!deleteSize) return res.status(404).json({ message: 'Size not found' })
    res.status(200).json({ message: 'Size Deleted', deleteSize: deleteSize })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
