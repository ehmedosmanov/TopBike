import express from 'express'
import {
  addCategoryToProduct,
  creatProduct,
  deleteProduct,
  getAllProducts
} from '../../controllers/productController.js'
import { upload } from '../../middlewares/upload.js'
const productRouter = express.Router()

productRouter.post(
  '/product',
  upload.fields([
    { name: 'mainImage', maxCount: 1 },
    { name: 'images', maxCount: 5 }
  ]),
  creatProduct
)
productRouter.post('/add-category-product', addCategoryToProduct)
productRouter.get('/product', getAllProducts)
productRouter.delete('/product/:id', deleteProduct)

export default productRouter
