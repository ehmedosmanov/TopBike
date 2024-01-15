import Tag from '../models/tag/tagModel.js'

export const createTag = async (req, res) => {
  try {
    const newTag = {
      ...req,
      body
    }
    await newTag.save()
    res.status(200).json({ message: 'Tag Created' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllTags = async (req, res) => {
  try {
    const getTags = await Tag.find({}).populate('Product')
    res.status(200).json({ message: 'Getting All Tags', Tags: getTags })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getTagById = async (req, res) => {
  try {
    const { id } = req.params
    const findTag = await Tag.findById(id).populate('Product')
    if (!findTag) return res.status(404).json({ message: 'Tag not found' })
    res.status(200).json({ message: 'Get Tag By Id', findTag })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateTag = async (req, res) => {
  try {
    const { id } = req.params
    const { name } = req.body
    const updateTag = await Tag.findByIdAndUpdate(id, { name }, { new: true })
    if (!updateTag) return res.status(404).json({ message: 'Tag not found' })

    res.status(200).json({ message: 'Tag updated', updateTag })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteTag = async (req, res) => {
  try {
    const { id } = req.params
    const deleteTag = await Tag.findByIdAndDelete(id)
    if (!deleteTag) return res.status(404).json({ message: 'Tag not found' })
    res.status(200).json({ message: 'Tag Deleted', deleteTag: deleteTag })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
