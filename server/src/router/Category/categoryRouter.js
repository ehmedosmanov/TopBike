import express from 'express'
import {
  createCategory,
  createSubCategory,
  delereCategory,
  getAllCategories,
  getParentCategories
} from '../../controllers/categoryController.js'

export const categoryRouter = express.Router()

categoryRouter.get('/category', getAllCategories)
categoryRouter.get('/parentCategory', getParentCategories)
categoryRouter.post('/category', createCategory)
categoryRouter.post('/subcategory', createSubCategory)
categoryRouter.delete('/category/:id', delereCategory)
