import { Category } from '../models/category/categoryModel.js'

export const createCategory = async (req, res) => {
  try {
    const { heading, to } = req.body
    const newCategory = new Category({
      heading,
      to,
      isParent: true
    })
    await newCategory.save()
    res.status(200).json(newCategory)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const createSubCategory = async (req, res) => {
  try {
    const { heading, to, parentCategoryId } = req.body
    const newCategory = new Category({
      heading,
      to,
      isParent: false,
      parentCategory: parentCategoryId
    })
    await newCategory.save()
    const parentCategory = await Category.findById(parentCategoryId)
    parentCategory.subcategories.push(newCategory.id)
    await parentCategory.save()
    res.status(201).json(newCategory)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const delereCategory = async (req, res) => {
  try {
    const findCategory = await Category.findByIdAndDelete(req.params.id)
    if (findCategory) {
      res.status(200).json(findCategory)
    } else {
      res.status(404).json({ message: 'Not Found Category' })
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllCategories = async (req, res) => {
  try {
    const getCategories = await Category.find()
    if (!getCategories) return res.status(404).json({ message: 'Not Found' })
    console.log(getCategories)
    res.status(200).json(getCategories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getParentCategories = async (req, res) => {
  try {
    const getCategories = await Category.find({}).populate('subcategories')
    if (!getCategories) return res.status(404).json({ message: 'Not Found' })
    console.log(getCategories)
    res.status(200).json(getCategories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
