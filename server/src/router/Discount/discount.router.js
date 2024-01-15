import express from 'express'
import {
  createDiscount,
  deleteDiscount,
  getAllDiscounts,
  updateDiscount
} from '../../controllers/discountController.js'
const discountRouter = express.Router()

discountRouter.post('/discount', createDiscount)
discountRouter.put('/discount/:id', updateDiscount)
discountRouter.get('/product', getAllDiscounts)
discountRouter.delete('/product/:id', deleteDiscount)

export default discountRouter
